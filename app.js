import  express  from "express";
import authRouter from "./routes/auth.routes.js"

const app = express();

app.use(authRouter);
app.listen(3000);