const mongoose = require('mongoose');
const express = require('express');
const ItemModel = mongoose.model('items');
const router = express.Router();
const Item = require('../models/item');

// adds to the url path specified in index.

exports.itemDetail = function(req,res) {
    // get the item id
    // display correct item information in the item view page
    // res.render('../views/item-view');
    // console.log(req.params.id);
    var id = req.params.id;
    ItemModel.findById(req.params.id, (err, result)=> {
        if (!err) {
            res.render('item-detail' , {data: result, layout: 'itemLayout'} );
        }
    }).lean();
};


// displays all things in the item model.
exports.getItemInfo = function(req, res) {
    console.log(req.params.id);
};

