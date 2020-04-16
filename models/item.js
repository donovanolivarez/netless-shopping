const mongoose = require('mongoose');

var ItemSchema = new mongoose.Schema({
    itemName : { type : String },
    itemPrice : { type : String },
    itemCat : { type : String }
    // inStock : { type : String }
});

mongoose.model('items', ItemSchema);