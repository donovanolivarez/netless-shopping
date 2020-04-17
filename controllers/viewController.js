const Item = require('../models/item');

exports.homeView = function(req,res) {
    Item.find(function(err,docs) {
        var itemChunks = [];
        var chunkSize = 3;
        for(var i = 0; i < docs.length; i += chunkSize){
            itemChunks.push(docs.slice(i, i + chunkSize));
        }
        res.render('../views/index',  {itemName: "Toilet Paper", items: itemChunks});
    }).lean();
};

exports.categoryView = function(req,res) {
    res.render('../views/categories');
}

exports.accountView = function(req,res) {
    res.render('../views/account');
}

exports.cartView = function(req,res) {
    res.render('../views/cart');
};
