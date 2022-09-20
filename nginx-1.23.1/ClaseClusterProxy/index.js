import os from 'os';
import cluster from 'cluster';
import express from 'express';


const CPUs = os.cpus().length;
const app = express();

if(cluster.isPrimary){
    console.log(`Soy un proceso primario con pid ${process.pid}`)
    for(let i = 0; i<CPUs;i++){
        cluster.fork();
    }
    cluster.on('message',message=>{
        console.log(message);
    })
    cluster.on('exit',worker=>{
        console.log(`El proceso hijo con pid ${worker.process.pid} murió :( `)
        cluster.fork();
    })
}
else{
    console.log(`Proceso hijo con pid ${process.pid} inicializado`)
    app.listen(8080,()=>console.log(`Listening on PORT 8080`))
}
app.get('/',(req,res)=>{
    res.send(`El proceso ${process.pid} Ha atendido esta petición `)
})
app.get('/operacion',(req,res)=>{
    let result = 0;
    process.send("Hola");
    for(let i=0;i<5e9;i++){
        result+=i
    }
    res.send(`Proceso con pid ${process.pid} finaliza operación con ${result}`)
})