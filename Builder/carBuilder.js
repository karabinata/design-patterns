// concrete builder
class CarBuilder {
    constructor() {
        this.car = {};
    }

    buildFrame() {
        this.car.frame = "Car Frame";
    }

    buildEngine() {
        this.car.engine = "150 hp";
    }

    buildWheels() {
        this.car.wheels = 4;
    }

    buildDoors() {
        this.car.doors = 4;
    }

    show() {
        console.log(`Frame: ${this.car.frame}, 
        Engine: ${this.car.engine}, 
        Wheels: ${this.car.wheels}, 
        Doors: ${this.car.doors}`);
    }
}

module.exports = CarBuilder;