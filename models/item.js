const mongoose = require('mongoose');

var ItemSchema = new mongoose.Schema({
    imagePath: {type: String},
    itemName: { type: String, required: true },
    itemPrice: { type: Number, required: true },
    itemCat: { type: String },
    description: {type: String}
    // inStock : { type : String }
});

module.exports = mongoose.model('items', ItemSchema);