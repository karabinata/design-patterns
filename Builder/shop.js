//director
class Shop {
    Construct(builder) {
        builder.buildFrame();
        builder.buildEngine();
        builder.buildWheels();
        builder.buildDoors();
    }
}

module.exports = Shop;