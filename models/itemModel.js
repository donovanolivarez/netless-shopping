const mongoose = require("mongoose");

var ItemSchema = new mongoose.Schema({
    itemName : {
        type : String,
        required : "Required"
    }, 
    itemPrice : {
        type : String,
    },
    inStock : {
        type : String,
    }
});

mongoose.model("Item", ItemSchema);

module.exports = mongoose.model('Item', ItemSchema);