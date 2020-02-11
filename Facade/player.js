const getData = require('./database');

class Player {
    constructor() {
        this.playlist = getData();
        this.currentIndex = 0;
    }

    play() {
        if (!this.playlist.length) {
            console.log('There are no items on the playlist. Please load some.');
            return;
        }

        let currentPlayListItem = this.playlist[this.currentIndex];

        if (!currentPlayListItem) {
            console.log('The item was not found.');
            return;
        }

        console.log(`Started playing ${currentPlayListItem.name} with duration ${currentPlayListItem.length}`);
    }

    stop() {
        console.log('Stop');
        this.currentIndex = 0;
    }

    next() {
        ++this.currentIndex;
        if (this.currentIndex >= this.playlist.length) {
            this.currentIndex = 0;
        }
        console.log('Swithed to the next item.');
    }

    prev() {
        --this.currentIndex;
        if (this.currentIndex < 0) {
            this.currentIndex = this.playlist.length - 1;
        }
        console.log('Swithed to the previous item.');
    }
}

module.exports = Player;