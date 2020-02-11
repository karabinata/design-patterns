const Character = require('./Character');

class CharacterC extends Character {
    constructor() {
        super('C', 100, 100);
    }

    display() {
        console.log(`${this.symbol} ${this.height} ${this.weight}`);
    }
}

module.exports = CharacterC;