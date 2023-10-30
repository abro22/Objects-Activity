

// /1. Create a dog object that has the properties height, breed, weight, and a method called bark that logs "Woof" to the console

const dog = {
    height: "Big",
    breed: "pomeranian",
    weight: "10 pounds",

    bark () {
    return `Woof`;
    }

}

console.log (dog.bark ())


//2. Create a house object that has properties squareFootage, numberOfBedrooms, and numberOfBathrooms. Log these three properties to the console. 


const house = {
    squarefoot: 1500,
    numOfBedrooms: 4,
    numOfBathrooms: 3,
}

console.log (house.squarefoot, house.numOfBedrooms , house.numOfBathrooms)




// 3. Write a program that creates an account object with the following characteristics:

const account = {

    name: "Alex",
    balance: 0,

     credit (Adding) {
        this.balance = this.balance + Adding},

    debit (Subtracting) {
        this.balance = this.balance - Subtracting},

    describe () {
        console.log (this.balance)

    }
}
account.describe ()

account.credit (250)
account.describe ()

account.debit (80)
account.describe ()



// A credit method adding the value passed as an argument to the account balance.

// A debit method that subtracts the value passed as an argument from the account balance.

// A describe method logging the account balance

// Use this object to log its balance, crediting 250, debiting 80, then log its balance again.
