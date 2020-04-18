const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
const mongoose = require('mongoose');
const Cart = require('../models/cart');
const Item = require('../models/item');
ItemModel = mongoose.model('items');

router.get('/:id/item-detail', itemController.itemDetail);

router.get('/item-detail', (req, res) => {
    res.send('details');
})
/*
router.get('/:id', (req,res)=> {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    ItemModel.findById(productId, function(err, product) {
        if (err) {
            return res.redirect('/');
        }
        console.log(product);
        /*
        cart.add(product, product.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect('/');

    });
});
*/


module.exports = router;