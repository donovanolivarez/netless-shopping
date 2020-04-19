const express = require('express');
// const csrf = require('csurf');
const router = express.Router();
const viewController = require('../controllers/viewController');
const userRoutes = require('./userRoutes');
// const csrfProtec = csrf();
// const passport = require('passport');

const cartController = require('../controllers/cartController');

// router.use(csrfProtec);

// path to cart view

// add to cart routes
router.get('/add', cartController.addToCart_get);
router.post('/add/:id', cartController.addToCart_post);

// router.get('/add/order', cartController.placeOrder);
router.post('/order', cartController.placeOrder);


module.exports = router;

