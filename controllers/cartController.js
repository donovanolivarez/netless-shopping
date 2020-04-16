const Cart = require('../models/cart');

// implementations defined here, called from the router files.

exports.addToCart_get = function(req,res) {
    res.send('adding to cart..');
}

exports.addToCart_post = function(req,res) {
    res.send('deleting from cart..');
}