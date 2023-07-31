import mongoDbStore from "connect-mongodb-session";
import expressSession from "express-session";

function createSessionStore() {
  const MongoDBStore = mongoDbStore(expressSession);

  const Store = new MongoDBStore({
    uri: "mongodb://127.0.0.1:27017",
    databaseName: "online-shop",
    collection: "sessions",
  });

  return Store;
}

function createSessionConfig() {
  return {
    secret: "super-secret",
    resave: false,
    saveUninitialized: false,
    store: createSessionStore(),
    cookie: {
      maxAge: 2 * 24 * 60 * 60 * 1000,
    },
  };
}

export default createSessionConfig;
