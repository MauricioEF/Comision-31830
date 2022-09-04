const minimist = require('minimist');

const args = minimist(process.argv.slice(2),{alias:{m:"MODE",p:"PORT",d:"DEBUG"},default:{m:"prod",p:0,d:false}});
const {MODE,PORT,DEBUG} = args;
let configObject = {
    mode : MODE,
    port : PORT,
    debug: DEBUG,
    others: args._
}

console.log(configObject);