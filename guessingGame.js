
const prompt = require('prompt-sync')({sigint: true}); 

console.log("\nWelcome to KodeCamp 3.0 NodeJs Beginner's Track Guessing Game!\n")

console.log("Game Instruction.")
console.log("To play:\n\tEnter a number between 1 and 10.\n\tType exit to quit the game.\n")
console.log("Game Begins, Goodluck!\n\n")

let isFalse = false; // Loop condition.

while (!isFalse){
    let numberToGuess = Math.floor(Math.random() * 10) + 1; // Take input from user.
    let number = prompt("Guess a number between 1 and 10: ") // Computer guess a random number between 1 and 10.

    if (number < 0 || number > 10){
        console.log("Follow simple instruction, enter number between 1 and 10: \n")
    }
    else if (number == "exit"){
        isFalse = true;
        console.log("Bye")
    }
    else if (number == numberToGuess){
        console.log("You won!\n")    
    } else{
        console.log(`You lost! The correct answer is ${numberToGuess}\n`)
    }
    
}