const mongoose = require('mongoose');
const express = require('express');
const ItemModel = mongoose.model('items');
const router = express.Router();
const Item = require('../models/item');

// adds to the url path specified in index.

exports.itemDetail = function(req,res) {
    // get the item id
    // display correct item information in the item view page
    res.render('../views/item-view');
}


// displays all things in the item model.
exports.getItemInfo = function(req, res) {
    ItemModel.find((err,docs)=> {
        if (!err){
            res.render("../views/item-view", { data : docs } );
        }
    }
).lean()};

