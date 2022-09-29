import express from 'express';
import usersRouter from './routes/users.router.js'
const app = express();
const PORT = 8080;
const server = app.listen(PORT,()=>console.log("Listo :)"));

app.use('/users',usersRouter);