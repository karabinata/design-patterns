const Player = require('./player');
const InteriorController = require('./InteriorController');

class HomeCinema {
    constructor() {
        this.player = new Player();
        this.interiorController = new InteriorController();
    }

    initHomeCinema() {
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
}

module.exports = HomeCinema;
const home = new HomeCinema();
home.initHomeCinema();
home.next();
home.next();
home.stop();
