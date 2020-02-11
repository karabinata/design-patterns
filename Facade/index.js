const HomeCinema = require('./homeCinema');

const start = () => {
    const home = new HomeCinema();
    home.initHomeCinema();
    home.next();
    home.next();
    home.stop();
};

start();