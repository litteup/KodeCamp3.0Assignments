
const prompt = require('prompt-sync')({sigint: true}); // install prompt-sync package to use// install prompt-sync package to run code.

console.log("\nWelcome to KodeCamp 3.0 NodeJs Beginner's Track Cart Simulator!\n");
console.log("Game Instruction.")
console.log("Input 'add' to add a value\nInput 'remove' to remove a value");
console.log("Input 'show-items' to show the items in the cart");
console.log("Input 'length' to to show the length of the cart");
console.log("Input 'exit' to exit the program\n");

let cart = {
    cartArray:[],
    
    addToCart(item){
        console.log("Type the product you will like to add ");
        const prompt = require('prompt-sync')({sigint: true});
        userInput = prompt("Product: ")
        this.cartArray.push(userInput);
        console.log("Product added successfully");
    },

    removeFromCart(cartArray, item){
        let cartArrayFilter = [];
        console.log("Type the product you will like to remove ");
        const prompt = require('prompt-sync')({sigint: true});
        userInput = prompt("Product: ")
        for (element in this.cartArray){
            if (this.cartArray[element] != userInput){
                cartArrayFilter.push(this.cartArray[element])
            }
        }
        this.cartArray = cartArrayFilter
        console.log("Product removed successfully");
               
    },

    showItem(){
        console.log(this.cartArray.join(", "))
    },

    cartLength(){
        console.log(this.cartArray.length)
    },

    standby (){  

        let isFalse = false; // Loop condition.

        while (!isFalse){
            let userInput = prompt("Command: ") // Takes in user input.

            if (userInput == "exit"){
                isFalse = true;
                console.log("Bye")
            }

            else if (userInput.toLocaleLowerCase() == "add"){
                this.addToCart();
            }

            else if (userInput.toLocaleLowerCase() == "remove"){
                this.removeFromCart();
            }
            else if (userInput.toLocaleLowerCase() == "show-items"){
                this.showItem();
            }
            
            else if (userInput.toLocaleLowerCase() == "length"){
                this.cartLength();
            }
            
            else{
                console.log("Invalid command")
            }

            console.log("\nInput 'add' to add a value\nInput 'remove' to remove a value")
            console.log("Input 'show-items' to show the items in the cart")
            console.log("Input 'length' to to show the length of the cart")
            console.log("Input 'exit' to exit the program\n")
               
        }
    }
}

cart.standby();