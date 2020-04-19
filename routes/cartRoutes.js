const express = require('express');
const router = express.Router();

const cartController = require('../controllers/cartController');


// path to cart view

// add to cart routes
router.get('/add', cartController.addToCart_get);
router.post('/add/:id', cartController.addToCart_post);


module.exports = router;

