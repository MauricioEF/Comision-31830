import express from 'express';
import config from './config/config.js';
import {fork} from 'child_process';

const app = express();
const PORT = config.PORT;

let visitas = 0;

const calculoPesado = () =>{
    let sum = 0;
    for(let i=0;i<6e9;i++){
        sum+=i
    }
    return sum;
}

app.get('/',(req,res)=>{
    res.send({config})
})

app.get('/calculo',(req,res)=>{
    let result = calculoPesado();
    res.send(`La suma es ${result}`);
})
app.get('/calculoForkeadoDelPoder',(req,res)=>{
    const result = fork('./calculoPesado.js')
    result.send('Start process!!!!')
    result.on('message',val=>{
        res.send(`El resultado de la suma es ${val}`)
    })
})
app.get('/visitas',(req,res)=>{
    res.send(`visitado ${++visitas} veces`)
})
const server = app.listen(PORT,()=>console.log(`Listening on ${PORT}`))