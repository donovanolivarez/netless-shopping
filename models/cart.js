const mongoose = require('mongoose');

var CartSchema = new mongoose.Schema({
    itemName: {type: String},
    imagePath:{type: String},
    itemPrice:{type: Number},
    items: []
    /*
    items: [{
        itemName: String,
        itemPrice:Number,
        imagePath:String
    }]
    */
    // inStock : { type : String }
});


module.exports = mongoose.model('cart', CartSchema);


/*
module.exports = function Cart(oldCart) {
    this.items = oldCart.items || {};
    this.totalQty = oldCart.totalQty || 10;
    this.totalPrice = oldCart.totalPrice || 10;

    this.add = function (item, id) {
        var storedItem = this.items[id];
        if (!storedItem) {
            storedItem = this.items[id] = { item: item, qty: 0, price: 0 };
        }
        storedItem.qty++;
        storedItem.price = storedItem.item.price * storedItem.qty;
        this.totalQty++;
        this.totalPrice += storedItem.item.price;
    }; 

    this.generateArray = function () {
        var arr = [];
        for (var id in this.items) {
            arr.push(this.items[id]);
        }
        return arr;
    };
};
*/