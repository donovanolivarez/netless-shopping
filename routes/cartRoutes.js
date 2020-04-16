const express = require('express');
const router = express.Router();

const cartController = require('../controllers/cartController');


// path to cart view
router.get('/', cartController.cartView);

// add to cart routes
router.get('/add', cartController.addToCart_get);
router.post('/delete', cartController.addToCart_post);

module.exports = router;

