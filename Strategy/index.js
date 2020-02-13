const DoSomething = require('./doSomething');
const ConsoleLogger = require('./consoleLogger');
const FileLogger = require('./fileLogger');

const start = () => {
    let logger = new ConsoleLogger();
    let doSomething = new DoSomething(logger);
    doSomething.doTheJob('Zdr bebce, kpr');

    logger = new FileLogger('./', 'test.txt');
    doSomething = new DoSomething(logger);
    doSomething.doTheJob('Nmz');
}

start();