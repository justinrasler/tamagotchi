// function wind(){
//     console.log("brrrrrrrrr")
// }

// wind()
// wind()
// wind()



// function steak(salt, meat){
//     const servings = meat/2
//     if (salt > 5){
//         console.log(`made ${servings} servings of salty meat`)
//     } else {
//         console.log(`made ${servings} servings of tasty meat`)
//     }
// }
// steak(3, 10)
// steak(6, 20)


// function helloWorld() {
//     console.log("hello World")
// }
// helloWorld()

// //function expression

// const helloWorld2 = function(){
//     console.log("hello world")
// }

// helloWorld2()

// // arrow function


// const helloWorld3 = () => {
//     console.log("hello World")

// }
// helloWorld3()


//parameters and arguments
// parameter is always in the function definition
// const nameAPony = (name, cheese) => {
//     console.log(`the name of the pony is ${name}`)
//     console.log(cheese)
// }

//argument is passed when the function is invoked and stored in the parameter
// nameAPony("james", "cheddar")
// nameAPony("billy")
// nameAPony("chuck")


//default paarameter values

// const logTheThing = (stuff = "hello World") => {
//     console.log(stuff)
//     return 1
// }
// //argument thats passed in takes priority over default arguement
// logTheThing("cheese")
// logTheThing()


// console.log("value of the function", logTheThing())

// const result = logTheThing()
// console.log(1)
   

//////////////////////////////
// Return Values
// const buyAPony = (name) => {
//     return [name,"This is a pony"]
// }
// const myPony = buyAPony("Lightning")
// console.log(myPony)
// console.log(myPony[1])


//////////////////////////
// Mathmatical Return
// const sum = (x, y) => x + y
// console.log(sum(2,2) + sum(3,3))

///////////////////////////////////
// Boolean Return Value
const isItEven = x => x % 2 === 0
if(isItEven(8)){
    console.log("It is even")
}