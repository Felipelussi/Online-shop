import  express  from "express";
import authRouter from "./routes/auth.routes.js"
import path from "path";



const app = express();

app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname, 'views'));




app.use(authRouter);
app.listen(3000);