const Calculator = require('./calculator');

class CalculatorCommand {
    constructor(calculator, operator, operand) {
        this.calculator = new Calculator();
        this.operator = operator;
        this.operand = operand;
    }

    execute() {
        this.calculator.operation(this.operator, this.operand);
    }

    unExecute() {
        this.calculator.operation(undo(this.operator), this.operand);
    }

    undo(operatorToUndo) {
        switch (operatorToUndo) {
            case '+': return '-';
            case '-': return '+';
            case '*': return '/';
            case '/': return '*';
        }
    }
}

module.exports = CalculatorCommand;