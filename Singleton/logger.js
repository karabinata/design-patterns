class Logger {
    constructor() {
        const instance = this.constructor.instance;
        if (instance) {
            return instance;
        }

        this.constructor.instance = this;
    }

    log(message) {
        console.log(`Logger: ${message}`);
    }
}

const log1 = new Logger();
log1.log('Log this not that')
const log2 = new Logger();
log2.log('Log that not this');
console.log(log1 === log2)
