const fs = require('fs');
const path = require('path');

class FileLogger {
    constructor(filePath, fileName) {
        this.filePath = filePath;
        this.fileName = fileName;
    }

    log(message) {
        fs.writeFileSync(path.join(__dirname, this.filePath, this.fileName), message)
    }
}

module.exports = FileLogger;