import compression from "compression";
import express from 'express';


const app = express();
// app.use(compression());
app.get('/',(req,res)=>{
    let string = "Hola cómo están";
    for(let i=0;i<1000;i++){
        string+="Hola cómo están";
    }
    res.send(string)
})
app.listen(8080,()=>console.log(`Listening on 8080`))