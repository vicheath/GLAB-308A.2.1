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


  class Adventurer extends Character {
    constructor(name, role) {
        super(name);
        this.role = role;
        this.inventory.push("bedroll", "50 gold coins");
    }

    scout() {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }
}

// Creating Robin using the Adventurer class
const robin = new Adventurer("Robin", "Warrior");
robin.inventory = ["sword", "potion", "artifact"];

// Creating companions for Robin
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

// Testing the roll method for Robin and companions
robin.roll(); // Example: Robin rolled a 17.
robin.companion.roll(); // Example: Leo rolled a 12.
robin.companion.companion.roll(); // Example: Frank rolled a 19.

// Testing static properties
console.log(Character.MAX_HEALTH); // Example: 100
console.log(Adventurer.ROLES); // Example: ["Fighter", "Healer", "Wizard"]

// Creating Robin using the Adventurer class
const robin = new Adventurer("Robin", "Fighter");

// Testing the roll method for Robin
robin.roll(); // Example: Robin rolled a 14.

//part5
class Character {
    static MAX_HEALTH = 100;

    constructor(name) {
        this.name = name;
        this.health = Character.MAX_HEALTH;
        this.inventory = [];
    }

    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
    }
}

class Adventurer extends Character {
    static ROLES = ["Fighter", "Healer", "Wizard"];

    constructor(name, role) {
        super(name);
        if (Adventurer.ROLES.includes(role)) {
            this.role = role;
            this.inventory.push("bedroll", "50 gold coins");
        } else {
            console.error("Invalid role for adventurer!");
        }
    }

    scout() {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }
}

class AdventurerFactory {
    constructor(role) {
        this.role = role;
        this.adventurers = [];
    }

    generate(name) {
        const newAdventurer = new Adventurer(name, this.role);
        this.adventurers.push(newAdventurer);
    }

    findByIndex(index) {
        return this.adventurers[index];
    }

    findByName(name) {
        return this.adventurers.find((a) => a.name === name);
    }
}

// Testing the code

// Creating Robin using the Adventurer class
const robin = new Adventurer("Robin", "Fighter");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

// Testing the roll method for Robin and companions
robin.roll(); // Example: Robin rolled a 14.
robin.companion.roll(); // Example: Leo rolled a 12.
robin.companion.companion.roll(); // Example: Frank rolled a 19.

// Creating a factory for healers
const healerFactory = new AdventurerFactory("Healer");

// Generating healers using the factory
healerFactory.generate("Healer1");
healerFactory.generate("Healer2");

// Finding healers by index or name
console.log(healerFactory.findByIndex(0)); // Example: Adventurer { name: 'Healer1', health: 100, ... }
console.log(healerFactory.findByName("Healer2")); // Example: Adventurer { name: 'Healer2', health: 100, ... }
