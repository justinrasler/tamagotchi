const printGreeting = (name) => {
    console.log(`hello there, ${name}`)
}  
console.log(printGreeting("Slimer"));

const reverseWordOrder = (str) => {
const words = str.split("")
const rwords = words.reverse();
var joinWords = rwords.join("");
return joinWords
}
console.log(reverseWordOrder("call me billy"))


function calculate(num1, num2, operation) {
    if( operation === "add") {
        return num1 + num2
    } else if(operation === "sub") {
        return num1 - num2
    }
}
console.log(calculate(4, 3, "sub"));



const printConsecutives = array => {
    for (let i = 2; i < array.length; i++) {
        if (array[i] - array[i - 1] === 1 && array[i - 1] - array[i - 2] === 1) {
            console.log(`${array[i]}, ${array[i - 1]}, ${array[i - 2]}`)
        }
    }
}
printConsecutives([1, 2, 3, 9, 8, 0, 44, 45, 46, 2, 9]);
printConsecutives([0, 0, 0, -3, -2, -1, 0, 1, 2, 3]);

function letterReverse(rev) {

}