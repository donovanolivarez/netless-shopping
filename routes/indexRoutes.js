const express = require('express');
const csrf = require('csurf');
const router = express.Router();
const viewController = require('../controllers/viewController');
const csrfProtec = csrf();
const passport = require('passport');

router.use(csrfProtec);
// routes to switch between pages

router.get('/',viewController.homeView);

router.get('/categories', viewController.categoryView);

router.get('/account',viewController.accountView);

router.get('/cart',viewController.cartView);

router.get('/user/signup', function(req,res) {
    var messages = req.flash('error');
    res.render('user/signup', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
});

router.post('/user/signup', passport.authenticate('local.signup', {
    successRedirect: '/',
    failureRedirect: '/user/signup',
    failureFlash: true
}));

router.get('/user/signin', function(req,res) {
    var messages = req.flash('error');
    res.render('user/signin', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
})

router.post('/user/signin', passport.authenticate('local-signin', {
    successRedirect: '/',
    failureRedirect: '/user/signin',
    failureFlash: true
}))


module.exports = router;