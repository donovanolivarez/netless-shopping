const express = require('express');
const csrf = require('csurf');
const router = express.Router();
const viewController = require('../controllers/viewController');
const userRoutes = require('./userRoutes');
const csrfProtec = csrf();
const passport = require('passport');

router.use(csrfProtec);
// routes to switch between pages

router.get('/',viewController.homeView);

router.get('/categories', viewController.categoryView);

router.get('/account', viewController.accountView);

router.get('/cart',viewController.cartView);

router.get('item-view', (req, res) => {
    res.send('details');
})

module.exports = router;