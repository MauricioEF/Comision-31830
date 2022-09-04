const minimist = require('minimist');

const args =  minimist(process.argv.slice(2),{alias:{m:"mode"},default:{m:"production"}})

if(args.mode==="production"){
    console.log("Sí enviamos el mail");
}
else{
    console.log("No se envía mail");
}