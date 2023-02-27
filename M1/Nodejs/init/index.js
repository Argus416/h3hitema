const prompt = require("prompt-sync")();

const number  = parseInt(prompt('Saisir un chiffre ').trim())


const reversNumber = (number)=>{
    number = parseInt(number.toString().split('').reverse().join(''))
    return number
}

const isToto = (number) =>{
    const reversedNumber = reversNumber(number)
    if(reversedNumber === number){
        return "is toto"
    }
    return "pas toto"
}


const result = isToto(number)

console.log(result)