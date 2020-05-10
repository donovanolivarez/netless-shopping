const mongoose = require('mongoose');
const Item = require('../models/item');
const Cart = require('../models/cart');
const CartModel = mongoose.model('cart');
const ItemModel = mongoose.model('items');

exports.homeView = function(req,res) {
    var addCheck = global.isAdded;
    var messageToDisplay = global.message;

    Item.find(function(err,docs) {
        var itemChunks = [];
        var chunkSize = 3;
        for(var i = 0; i < docs.length; i += chunkSize){
            itemChunks.push(docs.slice(i, i + chunkSize));
        }
        res.render('../views/index',  {items: itemChunks, check: addCheck, message: messageToDisplay});
        global.isAdded = false;
        global.message = "";
    }).lean();
};

exports.categoryView = function(req,res) {
    global.isAdded = false;
    global.message = "";
    res.render('../views/categories');
}

exports.viewAllCleaningItems = function(req, res) {
    ItemModel.find({itemCat: 'cleaning'}, function(err,docs) {
        res.render('../views/categories/all-items-cleaning', {data: docs});    
    }).lean();
}

exports.viewAllElectronics = function(req, res) {
    ItemModel.find({itemCat: 'elec'}, function(err,docs) {
        res.render('../views/categories/all-items-electronics', {data: docs});    
    }).lean();
}

exports.viewAllSchoolItems = function(req, res) {
    ItemModel.find({itemCat: 'school'}, function(err,docs) {
        res.render('../views/categories/all-items-school', {data: docs});    
    }).lean();
}

exports.accountView = function(req,res) {
    global.isAdded = false;
    global.message = "";
    res.render('../views/account');
}

exports.cartView = function(req,res) {
    global.isAdded = false;
    global.message = "";


    CartModel.find( {}, function(err, docs) {
        var itemsInCart = [];
        var totalPrice = 0;
        for (var i = 0; i < docs.length; i ++) {
            for(var j = 0; j < docs[i].items.length; j ++) {
                itemsInCart.push(docs[i].items[j]);
                totalPrice += docs[i].items[j].itemPrice;
            }
        }

        if (itemsInCart === undefined || itemsInCart.length == 0){
            // render another view telling the user there are no items.
            // don't have to do this 
            var emptyCartMessage = "Cart is empty, add something and it will appear here!";
            var cartEmpty = true;
            res.render('../views/cart', {items: itemsInCart, layout: 'itemLayout', message: emptyCartMessage, cartEmptyCheck: cartEmpty});
        } else {
            res.render('../views/cart', {items: itemsInCart, layout: 'itemLayout', total: totalPrice});
        }
    }).lean();
};
