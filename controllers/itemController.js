const mongoose = require('mongoose');
const express = require('express');
const ItemModel = mongoose.model('items');
const router = express.Router();
const Item = require('../models/item');

// adds to the url path specified in index.

exports.itemDetail = function(req,res) {

    var id = req.params.id;
    ItemModel.findById(req.params.id, (err, result)=> {
        if (!err) {
            res.render('item-detail' , {data: result, layout: 'itemLayout'} );
        }
    }).lean();
};


