class DoSomething {
    constructor(logger) {
        this.logger = logger;
    }

    doTheJob(message) {
        this.logger.log(message);
    }
}

module.exports = DoSomething;