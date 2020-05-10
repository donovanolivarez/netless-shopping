const mongoose = require('mongoose');
const express = require('express');
const ItemModel = mongoose.model('items');
const CartModel = mongoose.model('cart');
const router = express.Router();
const Item = require('../models/item');

// adds to the url path specified in index.

exports.itemDetail = function (req, res) {

    ItemModel.findById(req.params.id, (err, docs) => {
        if (!err) {
                // if statement to decide which detail view to render? No.
                res.render('item-detail', { data: docs, layout: 'itemLayout', inCartCheck: true });
                return;
            }
    }).lean();

};


