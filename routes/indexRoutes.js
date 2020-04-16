const express = require('express');
const router = express.Router();
const viewController = require('../controllers/viewController');
// routes to switch between pages

router.get('/',viewController.homeView);

router.get('/categories', viewController.categoryView);

router.get('/account',viewController.accountView);

router.get('/cart',viewController.accountView);

module.exports = router;