const CalculatorCommand = require('./calculatorCommand');

// Invoker class
class User {
    constructor(calculator) {
        this.calculator = calculator;
        this.commands = [];
        this.current = 0;
    }

    redo(levels) {
        console.log(`Redo ${levels} levels`);
        for (let i = 0; i < levels; i++) {
            if (this.current < this.commands.length - 1) {
                const command = this.commands[this.current++];
                command.execute();
            }
        }
    }

    undo(levels) {
        console.log(`Undo ${levels} levels`);
        for (let i = 0; i < levels; i++) {
            if (this.current > 0) {
                const command = this.commands[--this.current];
                command.unExecute();
            }
        }
    }

    compute(operator, operand) {
        const command = new CalculatorCommand(this.calculator, operator, operand);
        command.execute();

        this.commands.push(command);
        this.current++;
    }
}

module.exports = User;