class Calculator {
    constructor() {
        this.currentValue = 0;
    }

    operation(operator, operand) {
        switch (operator) {
            case '+':
                this.currentValue += operand;
                break;
            case '-':
                this.currentValue -= operand;
                break;
            case '*':
                this.currentValue *= operand;
                break;
            case '/':
                this.currentValue /= operand;
                break;
        }

        console.log(`Current value is ${this.currentValue}`);
    }
}

module.exports = Calculator;