const Character = require('./character');

class CharacterA extends Character {
    constructor() {
        super('A', 100, 75);
    }

    display() {
        console.log(`${this.symbol} ${this.height} ${this.weight}`);
    }
}

module.exports = CharacterA;