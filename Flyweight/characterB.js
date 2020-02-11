const Character = require('./Character');

class CharacterB extends Character {
    constructor() {
        super('B', 100, 50);
    }

    display() {
        console.log(`${this.symbol} ${this.height} ${this.weight}`);
    }
}

module.exports = CharacterB;