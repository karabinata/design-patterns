class Character {
    constructor(symbol, height, weight) {
        this.symbol = symbol;
        this.height = height;
        this.weight = weight;
    }

    display() {
        console.log('Character')
    }
}

module.exports = Character;