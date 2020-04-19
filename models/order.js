const mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
    cart: {type: Object},
    totalPrice: Number,
    orderNumer:Number
    /*
    items: [{
        itemName: String,
        itemPrice:Number,
        imagePath:String
    }]
    */
    // inStock : { type : String }
});


module.exports = mongoose.model('order', OrderSchema);