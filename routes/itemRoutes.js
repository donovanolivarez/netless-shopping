const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
const Cart = require('../models/cart');
const Item = require('../models/item');

// router.get('/:id', itemController.getItemInfo);



router.get('/item-view/:id', (req,res)=> {
    var itemId = req.params.id;
    var cart = new cart(req.session.cart ? req.session.cart : {});

    Item.findById(itemId, 'itemName', function(err, product) {
        if (err) {
            return res.redirect('/index');
        }

        cart.add(item, item.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect('/index');
    });
});

module.exports = router;