process.on('exit',evt=>{
    console.log("Saliendo...")
    console.log(evt);
})
process.on('uncaughtException',evt=>{
    console.log("evt",typeof evt);
    console.log("Excepción no controlada");
})


console.log(process.cwd());//Muestra la carpeta actual de trabajo current work directory
console.log(process.pid); //Id del proceso actual
console.log(process.title);//Desde dónde se corre el comando
console.log(process.version); //
throw new Error("Hola");
console.log(process.execPath);//Trae el runtime actual
console.log(process.platform);
console.log(process.memoryUsage());


