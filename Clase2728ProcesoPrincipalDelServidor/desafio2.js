process.on('exit',evt=>{
    console.log(`Process ended with code ${evt}`);
})

process.on('uncaughtException',evt=>{
    switch(evt.message){
        case "INVALID TYPE":
            process.exit(-5);
            break;
        case "EMPTY INPUT":
            process.exit(-4)
    }
})
const processNumbers = (...numbers) =>{
    let sum = 0;
    if(numbers.length===0){
        console.error({
            error:{
                description:"Empty input"
            }
        })
        throw new Error('EMPTY INPUT')
    }
    for(const number of numbers){
        if(isNaN(number)){
            console.log({
                error:{
                    description:'INVALID TYPE',
                    numbers,
                    types:numbers.map(value=>typeof value)
                }
            })
            throw new Error("INVALID TYPE")
        }
        sum+=number;
    }
    console.log(sum);
}
processNumbers(1,3,1,4,1,9,1,5)