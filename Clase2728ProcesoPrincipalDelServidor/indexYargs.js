import yargs from 'yargs';
const yargInstance = yargs(process.argv.slice(2)).default({
    m:"prod",
    p:0,
    u:"root",
    d:false
}).alias({
    m:"MODE",
    p:"PORT"
})
const args =  yargInstance.argv;
let configObject = {
    mode:args.MODE,
    port:args.PORT,
    debug:args.d,
    others:args._
}

console.log(configObject);