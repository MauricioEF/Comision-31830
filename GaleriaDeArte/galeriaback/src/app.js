import express from 'express';
import usersRouter from './routes/users.router.js';
import sessionsRouter from './routes/sessions.router.js';
import cors from 'cors';
import {__dirname} from './utils.js';

const app = express();

app.use(cors());
app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/users',usersRouter);
app.use('/api/sessions',sessionsRouter);
const server= app.listen(8080,()=>console.log("Listening"))