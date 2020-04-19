const express = require('express');
const csrf = require('csurf');
const router = express.Router();
const viewController = require('../controllers/viewController');
const userRoutes = require('./userRoutes');
const csrfProtec = csrf();
const passport = require('passport');

// router.use(csrfProtec);
// routes to switch between pages

router.get('/all-items-cleaning', viewController.viewAllCleaningItems);

router.get('/all-items-electronics', viewController.viewAllElectronics);

router.get('/all-items-school', viewController.viewAllSchoolItems);


module.exports = router;