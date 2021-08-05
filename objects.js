// const key = "weapon"
// const robot = {
//     name: "BleepBlop",
//     serial: 1,
//     isEvil: false,
//     "Gas Tank": "full",
//     [key]: "Lazers",
//     speak: () => {
//         console.log("EXTERRRRRMINATE!!!")
//     },
//     attack: function() {
//         console.log(`${this.name} attacks with its ${this.weapon}`)
//     }
// }
// console.log(robot.name)
// console.log(robot["Gas Tank"])
// console.log(robot.weapon)
// robot.speak()
// robot.attack()



// const obj = {
//     prop: "Hello World",
//     // Arrow function in an object
//     myFunc: () => {
//         console.log(`can I use this?... ${this.prop}`)
//     },
//     // Function Expression
//     myFunc2: function(){
//         console.log(`can I use this?... ${this.prop}`)
//     },
//     // Function Declaration
//     myFunc3(){
//         console.log(`can I use this?... ${this.prop}`)
//     }
// }
// obj.myFunc()
// obj.myFunc2()
// obj.myFunc3()



//robot empire - Factory Design Pattern


const robotEmpire = {
    //array where we hold the robots
    army: [],
    //build function to build robots
    build: function(){
        //create a new robot
        const newRobot = {
            name: `Robot Soldier ${this.army.length}`,
        serial: this.army.length,
        weapon: "lazers",
        attack: function(){
            console.log(`${this.name} attacks with its ${this.weapon}`)
        }
        }
        //push the new robot in the army
        this.army.push(newRobot)
       
      
    }
}
// robotEmpire.build()
// robotEmpire.build()
// console.log(robotEmpire.army)
// robotEmpire.army[0].attack()

// for (let i = 0; i< 100; i++){
//     robotEmpire.build()

// }
// for (robot of robotEmpire.army){
//     if(robot.serial % 2 === 0){
//         robot.attack()
//     }
// }


//object destructuring

const brokenRobot = {
    part1: "arm",
    part2: "lazer",
    part3: "wheels"
}
//hard way
// const part1 = brokenRobot.part1
// const part2 = brokenRobot.part2
// const part3 = brokenRobot.part3
// console.log(part1, part2, part3)

//easy way - destructuring
const {part1, ...theRest} = brokenRobot
// const {part1, part2, part3} = brokenRobot
console.log(part1, theRest)



//array destructuring


// const arr = ['ira', 'alex', 'yanni', 'chris', 'ray']
// const [ira, alex, yanni, chris, ray] = arr
// console.log(ira, yanni, ray)



const  [one, two, three, four, five] = [1, 2, 3, 4, 5]