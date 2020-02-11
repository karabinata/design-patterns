const CharacterFactory = require('./characterFactory');

const start = () => {
    const document = 'ABCABC';
    const chars = [...document];
    const factory = new CharacterFactory();

    chars.forEach(char => {
        let character = factory.getCharacter(char);
        character.display();
    });
}

start();