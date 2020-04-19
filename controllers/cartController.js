const Item = require('../models/item');
const Cart = require('../models/cart');
const mongoose = require('mongoose');
const CartModel = mongoose.model('cart');
const ItemModel = mongoose.model('items');
const validator = require('express-validator');

const async = require('async');
// implementations defined here, called from the router files.

exports.addToCart_get = function(req,res) {

}

exports.addToCart_post = function(req,res) {


    ItemModel.findById(req.params.id, ['-__v'], (err, docs) => {
        var totalPrice = CartModel.totalPrice || 0;
        var price = docs.toObject().itemPrice;

        var items = [docs.itemName, docs.itemPrice, docs.imagePath]
        console.log(items)

        var nameObj = docs.toObject().itemName;
        var priceObj = docs.toObject().itemPrice;
        var imageObj = docs.toObject().imagePath;

         if (!err) {
            CartModel.create( {  itemName: nameObj, imagePath: imageObj, itemPrice: priceObj, items: docs.toObject() }, (err, result)=> {
                console.log(result._id); // store this somewhere.
                addCartId(result._id.toString());
                printCartIds();
            });
            res.redirect('/');
         }
   })
} 


// array of cart ids will use when determining where to save an item.
var cartIds = [];

function addCartId(cartId){
    cartIds.push(cartId);
}

function printCartIds(){
    for (var id of cartIds) {
        console.log(id);
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