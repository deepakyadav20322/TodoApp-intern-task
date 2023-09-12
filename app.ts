import express ,{Request,Response} from 'express';
import router from './routes/todoRoutes';
require('dotenv').config();
import cors from 'cors';
import { dbConnection } from './controllers/db';
const app = express();

const  port = process.env.PORT || 5000;
dbConnection();
app.use(cors());
app.use(express.json());

app.use('/',router); 

app.listen(port,():void=>{
console.log(`Server is running on ${port}...`);
})