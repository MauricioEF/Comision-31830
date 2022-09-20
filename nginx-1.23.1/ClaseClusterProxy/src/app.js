import express from 'express';
import __dirname from './util.js';


const app = express();
const PORT = process.env.PORT;

app.listen(PORT,()=>console.log(`Listening on PORT ${PORT}`))

// app.use(express.static(__dirname+'/public'))

app.get('/saludo',(req,res)=>{
    res.send(`Servidor con pid ${process.pid} atendiendo petición nuevamente en puerto ${PORT}`)
})