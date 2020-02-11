class InteriorController {
    dimLights(amount) {
        let desiredAmount = amount;

        if (desiredAmount < 0) {
            desiredAmount = 0;
        }

        if (desiredAmount > 100) {
            desiredAmount = 100;
        }

        console.log(`Lights are dimmed to ${desiredAmount}`);
    }

    moveCurtains(amount) {
        let desiredAmount = amount;

        if (desiredAmount < 0) {
            desiredAmount = 0;
        }

        if (desiredAmount > 100) {
            desiredAmount = 100;
        }

        console.log(`Curains are moved to ${desiredAmount}`);
    }

    muteTheWife() {
        console.log('Wife muted! :)')
    }
}

module.exports = InteriorController;