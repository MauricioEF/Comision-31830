//Realizar una suma de dos números;
const suma = (num1,num2) =>{
    if(!num1||!num2) return null;
    if(typeof num1 != "number"|| typeof num2 != "number") return null;
    return num1+num2;
}


console.log(suma(1,2));