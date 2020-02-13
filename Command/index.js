const Calculator = require('./calculator');
const User = require('./user');

const start = () => {
    const user = new User(new Calculator());

    user.compute('+', 100);
    user.compute('-', 50);
    user.compute('*', 10);
    user.compute('/', 2);

    user.undo(4);
    user.redo(3);
}

start();