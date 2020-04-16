const mongoose = require('mongoose');
const express = require('express');
const ItemModel = mongoose.model('items');
const router = express.Router();
const Item = require('../models/item');

// adds to the url path specified in index.

exports.itemDetail = function(req,res) {
    res.send('item deatil page');
}