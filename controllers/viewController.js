const Item = require('../models/item');
const mongoose = require('mongoose');
const Cart = require('../models/cart');
const CartModel = mongoose.model('cart');
const ItemModel = mongoose.model('items');

exports.homeView = function(req,res) {
    Item.find(function(err,docs) {
        var itemChunks = [];
        var chunkSize = 3;
        for(var i = 0; i < docs.length; i += chunkSize){
            itemChunks.push(docs.slice(i, i + chunkSize));
        }
        res.render('../views/index',  {items: itemChunks});
    }).lean();
};

exports.categoryView = function(req,res) {
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
    
    res.render('../views/account');
}

exports.cartView = function(req,res) {
    CartModel.find( {}, function(err, docs) {
        var itemsInCart = [];
        for (var i = 0; i < docs.length; i ++){
            // console.log(docs[i]._id);
            for(var j = 0; j < docs[i].items.length; j ++) {
                itemsInCart.push(docs[i].items[j]);
            }
        }

        if (itemsInCart === undefined || itemsInCart.length == 0){
            // render another view telling the user there are no items.
        } else {
            res.render('../views/cart', {items: itemsInCart, layout: 'itemLayout'});
        }
    }).lean();
};
