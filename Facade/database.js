class Database {
    constructor() {
        this.availableMedia = [];
    }

    addMedia(media) {
        this.availableMedia.push(media);
    }

    getMedia() {
        return this.availableMedia;
    }
}

module.exports = Database;