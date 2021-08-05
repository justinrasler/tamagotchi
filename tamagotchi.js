const tamagotchi = {
    name: 'ringo',
    weight: '800 pounds',
    age: '3hunnu',
    birthday: 'february 31',
    description: 'real',
    areYouhungry: true,
    happinessLevel: 'very happy',
    attentionLevel: 'low',
    lifeStage: 'god',
//////////////////
////////////////////////
    //isHungry = false
    // wantsToPlay: true,
    // isHappy: true,
    // needsAttention: true,
///////////////
/////////////////////////
eat: function () {
let isHungry = false
if(isHungry === false){
    console.log('i can really go for some pizza')
}else {
    console.log('im good')
}
},

play: function() {
    let isHappy = true
    let needsAttention = true
    if (isHappy === true && needsAttention === true) {
        console.log(`leave me alone. you only want to play when youre bored`)
    }else {
        console.log(`play with me before i die`)
    }

},
speak: function () {
    for (let i = 0; i < 5; i ++){
        if (i % 2 === 0) {
            console.log(`wus good`)
        }else if (i % 3 === 0) {
            console.log(`what do you want`)
        }
    }
}

}
console.log(tamagotchi.age)
console.log(tamagotchi.birthday)
console.log(tamagotchi.weight)
console.log(tamagotchi.description)




console.log(tamagotchi.lifeStage);
tamagotchi.eat();
tamagotchi.play();
tamagotchi.speak();
tamagotchi.speak();
tamagotchi.speak();
