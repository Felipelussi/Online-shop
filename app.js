import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import csrf from "csurf";
import expressSession from "express-session";

import authRouter from "./routes/auth.routes.js";
import db from "./data/database.js";
import addCsrfTokenMiddleware from "./middlewares/csrf-token.js";
import errorHandlerMiddleware from "./middlewares/error-handler.js";
import checkAuthStatusMiddleware from "./middlewares/check-auth.js";
import createSessionConfig from "./config/session.js";
import productsRoutes from "./routes/products.routs.js"
import baseRoutes from "./routes/base.routes.js"


const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));


app.use(expressSession(createSessionConfig()));
app.use(csrf());

app.use(addCsrfTokenMiddleware);
app.use(checkAuthStatusMiddleware);

app.use(baseRoutes);
app.use(authRouter);
app.use(productsRoutes);

app.use(errorHandlerMiddleware);

db.connectToDatabase()
  .then(function () {
    app.listen(3000);
  })
  .catch(function (error) {
    console.log("Failed to connect to the database!");
    console.log(error);
  });
