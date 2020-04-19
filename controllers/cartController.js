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

exports.addToCart_get = function(req,res) {

}

module.exports.addToCart_post = function(req,res) {
    ItemModel.findById(req.params.id, ['-__v'], (err, docs ) => {
        var totalPrice = CartModel.totalPrice || 0;
        var price = docs.toObject().itemPrice;
        totalPrice += price;

        // var items = [docs.itemName, docs.itemPrice, docs.imagePath]

         if (!err) {
            
            if ( cartIds === undefined || cartIds.length == 0) {
                CartModel.create( {items: docs.toObject(), totalPrice: totalPrice}, (err, result, done)=> {
                    addCartId(result._id);
                });
            } else {

            for( var i of cartIds) {
                if (CartModel.findById(i).exists){
                        CartModel.findById(i, (err, result)=> {
                          result.items.push(docs);
                          result.totalPrice += totalPrice;
                          result.save();
                        })
                } else {
            CartModel.create( { items: docs.toObject(), totalPrice: totalPrice }, (err, result,done)=> {
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


module.exports.placeOrder = function (req, res) {
    var totalPrice = 0;

    CartModel.find({}, function(err, docs){

        OrderModel.create( {cart: docs})
        res.redirect('/');
    });
};


// array of cart ids will use when determining where to save an item.
var cartIds = [];

function addCartId(cartId){
    cartIds.push(cartId);
    return;
}

function printCartIds(){
    for (var id of cartIds) {
        console.log(id);
        return;
    }
}


        /*
        CartModel.create(docs, {itemPrice: docs.itemPrice, itemName: docs.itemName, imagePath: docs.imagePath})
        
        .then(()=> {
            console.log(docs._id);
        })
        .catch((reject)=> {
            console.log(reject);
        });
        */