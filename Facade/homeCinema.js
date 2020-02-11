const Player = require('./player');
const InteriorController = require('./InteriorController');
const Database = require('./database');

// Facade
class HomeCinema {
    constructor() {
        this.database = new Database();
        this.player = new Player();
        this.interiorController = new InteriorController();
        this.seedDatabase();
    }

    initHomeCinema() {
        this.loadMedia();
        this.interiorController.dimLights(50);
        this.interiorController.moveCurtains(100);
        this.interiorController.muteTheWife();
        this.player.play();
    }

    next() {
        this.player.next();
        this.player.play();
    }

    prev() {
        this.player.prev();
        this.player.play();
    }

    stop() {
        this.player.stop();
    }

    seedDatabase() {
        this.database.addMedia({
            name: "Harry Poten and the Soap of secrets",
            id: 1,
            length: "126 min"
        });
        this.database.addMedia({
            name: "Tutmanik with Leopardo",
            id: 2,
            length: "156 min"
        });
        this.database.addMedia({
            name: "Recep Ivedik",
            id: 3,
            length: "91 min"
        });
    }

    loadMedia() {
        const allMedia = this.database.getMedia();
        allMedia.forEach(media => {
            this.player.load(media);
        });
    }
}

module.exports = HomeCinema;
