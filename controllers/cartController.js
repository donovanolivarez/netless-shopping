const Item = require('../models/item');
const Cart = require('../models/cart');
const Order = require('../models/order');
const mongoose = require('mongoose');
const CartModel = mongoose.model('cart');
const ItemModel = mongoose.model('items');
const OrderModel = mongoose.model('order');
const validator = require('express-validator');

const async = require('async');
// implementations defined here, called from the router files.


global.isAdded = false;
global.message = "";

// array of cart ids will use when determining where to save an item.
global.cartIds = [];

function addCartId(cartId) {
    global.cartIds.push(cartId);
    return;
}

//helper for me to use.
function printCartIds() {
    for (var id of global.cartIds) {
        console.log(id);
        return;
    }
}

function emptyCartModel() {
    CartModel.deleteMany({}, function (err, result) {
        console.log(result);
        global.cartIds.pop();
    }).lean();
}


exports.addToCart_get = function (req, res) {

}

module.exports.addToCart_post = function (req, res) {
    global.message = "item added to cart!";
    global.isAdded = true;

    ItemModel.findById(req.params.id, ['-__v'], (err, docs) => {
        var totalPrice = CartModel.totalPrice || 0;
        var price = docs.toObject().itemPrice;
        totalPrice += price;

        if (!err) {
            // create new cart model, add cart id to array, and add new item to the cart
            if (global.cartIds === undefined || global.cartIds.length == 0) {
                CartModel.create({ items: docs.toObject(), totalPrice: totalPrice }, (err, result, done) => {
                    addCartId(result._id);
                });
            } else {
                // find existing cart id to add the new item too
                for (var i of global.cartIds) {
                    if (CartModel.findById(i).exists) {
                        CartModel.findById(i, (err, result) => {
                            result.items.push(docs);
                            result.totalPrice += totalPrice;
                            result.save();
                        })
                    } else {
                        // probably don't need this snippet. above already does the job??
                        CartModel.create({ items: docs.toObject(), totalPrice: totalPrice }, (err, result, done) => {
                            addCartId(result._id);
                        });
                    }
                }
            }
            res.redirect('/');
        }
        else {
            console.log(err);
        }
    });
}

module.exports.removeFromCart = function (req, res) {
    // add a remove from cart button

    global.isAdded = true;
    global.message = "Item removed from your cart"

    ItemModel.findById(req.params.id, ['-__v'], (err, docs) => {
        for (var i of global.cartIds) {
            if (CartModel.findById(i).exists) {
                CartModel.findById(i, (err, result) => {

                    for (var j = 0; j < result.items.length; j++) {
                        console.log(result.items.length);
                        if (result.items[j].id === docs.toObject().id && result.items[j].itemName === docs.toObject().itemName){
                            console.log("Hit!");
                            result.items = result.items.slice(0,j).concat(result.items.slice(j+1, result.items.length));
                            break;
                        }
                    }
                    /*
                    result.items = result.items.filter(function(item) {
                        return item.id !== docs.toObject().id;
                    });
                    */
                    result.totalPrice -= docs.itemPrice;
                    result.save();
                })
            }
        }
    })
    console.log("removed from the cart!");
    res.redirect('/');
}

module.exports.addToWishlist = function (req, res) {
    global.isAdded = true;
    global.message = "Item has been added to your wishlist!";
    res.redirect('/');
}

module.exports.placeOrder = function (req, res) {
    global.isAdded = true;
    global.message = "Order placed, thank you!"
    var totalPrice = 0;

    CartModel.find({}, function (err, docs) {

        OrderModel.create({ cart: docs })
        res.redirect('/');
    });
    emptyCartModel();
};