// concrete builder
class TruckBuilder {
    constructor() {
        this.truck = {};
    }

    buildFrame() {
        this.truck.frame = "Truck Frame";
    }

    buildEngine() {
        this.truck.engine = "250 hp";
    }

    buildWheels() {
        this.truck.wheels = 4;
    }

    buildDoors() {
        this.truck.doors = 2;
    }

    show() {
        console.log(`Frame: ${this.truck.frame}, 
        Engine: ${this.truck.engine}, 
        Wheels: ${this.truck.wheels}, 
        Doors: ${this.truck.doors}`);
    }
}

module.exports = TruckBuilder;