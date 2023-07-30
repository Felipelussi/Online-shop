import  express  from "express";
import authRouter from "./routes/auth.routes.js"
import path from "path";
import db from "./data/database.js"
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);


const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));


app.use(authRouter);

db.connectToDatabase()
    .then(function(){
        app.listen(3000);
    })
    .catch(function(error){
        console.log('Failed to connect to the database!');
        console.log(error);
    });
