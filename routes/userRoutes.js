const express = require('express');
// const csrf = require('csurf');
const router = express.Router();
// const csrfProtec = csrf();
// router.use(csrfProtec);
const passport = require('passport');
const viewController = require('../controllers/viewController');

router.get('/signup', function(req,res) {
    var messages = req.flash('error');
    res.render('user/signup', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
});

router.post('/signup', passport.authenticate('local.signup', {
    successRedirect: '/',
    failureRedirect: '/user/signup',
    failureFlash: true
}));

router.get('/signin', function(req,res) {
    var messages = req.flash('error');
    res.render('user/signin', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
});

router.post('/signin', passport.authenticate('local-signin', {
    successRedirect: '/account',
    failureRedirect: '/user/signin',
    failureFlash: true
}));

// router.get('user/account', viewController.accountView);

function isLoggedIn (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
}


module.exports = router;