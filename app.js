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
import cartMiddleware from "./middlewares/cart.js";
import protectRoutes from "./middlewares/protect-routes.js";
import createSessionConfig from "./config/session.js";
import productsRoutes from "./routes/products.routes.js";
import baseRoutes from "./routes/base.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import cartRoutes from "./routes/cart.routes.js";
import exp from "constants";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));
app.use("/products/assets", express.static("product-data"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(expressSession(createSessionConfig()));
//app.use(csrf());

app.use(cartMiddleware);

//app.use(addCsrfTokenMiddleware);
app.use(checkAuthStatusMiddleware);

app.use(baseRoutes);
app.use(authRouter);
app.use(productsRoutes);
app.use("/cart", cartRoutes);
app.use(protectRoutes);
app.use("/admin", adminRoutes);

app.use(errorHandlerMiddleware);

db.connectToDatabase()
  .then(function () {
    app.listen(3000);
  })
  .catch(function (error) {
    console.log("Failed to connect to the database!");
    console.log(error);
  });
