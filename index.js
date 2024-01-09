// GLAB 308A.2.1: An Object-Oriented Adventure


const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion: {
            name: "Frank",
            type: "Flea",
            belongings: ["small hat", "sunglasses"]}},
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
}
console.log(adventurer.roll()); // Example: 4

// Function to create a new adventurer with default values
function createAdventurer(name) {
    return {
        name: name,
        health: 10,
        inventory: [],
        companion: {},
        roll: function() {
            return Math.floor(Math.random() * 6) + 1;
        }
    };
}
// Create multiple adventurers
const adventurer1 = createAdventurer("Alice");
const adventurer2 = createAdventurer("Taku");

class Character {
    constructor (name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }
  }