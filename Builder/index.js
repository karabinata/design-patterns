const CarBuilder = require('./carBuilder');
const TruckBuilder = require('./truckBuilder');
const Shop = require('./shop');

(() => {
    const shop = new Shop();
    let builder = new CarBuilder();
    shop.Construct(builder);
    builder.show();

    builder = new TruckBuilder();
    shop.Construct(builder);
    builder.show();
})()