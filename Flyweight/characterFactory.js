const CharacterA = require('./characterA');
const CharacterB = require('./characterB');
const CharacterC = require('./characterC');

class CharacterFactory {
    constructor() {
        this.characters = {};
    }

    getCharacter(key) {
        let character;
        if (this.characters[key]) {
            character = this.characters[key];
        } else {
            switch (key) {
                case 'A':
                    character = new CharacterA()
                    break;
                case 'B':
                    character = new CharacterB()
                    break;
                case 'C':
                    character = new CharacterC()
                    break;
            }

            this.characters[key] = character;
        }

        return character;
    }
}

module.exports = CharacterFactory;