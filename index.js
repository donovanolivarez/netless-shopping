const connection = require('./models');
const express = require('express');
const path = require('path');
const expressHandlebars = require('express-handlebars');
const bodyparser = require('body-parser');
const cookieParser = require('cookie-parser');
const indexRoute = require('./routes/indexRoutes');
const cartRouter = require('./routes/cartRoutes');
const itemRouter = require('./routes/itemRoutes');
const csrf = require('csurf');
const csrfProtection = csrf();
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
const validator = require('express-validator');
const app = express();
require('./config/passport');


/*
app.get('/home', (req, res)=> {
    res.redirect('/index');
});
*/

app.use(cookieParser());
app.use(express.json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded( {extended: false}));
app.use(validator()); 
app.use(session({secret: 'supersecret', resave: false, saveUninitialized: false}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use('/', indexRoute);
app.use('/cart', cartRouter);
app.use('/item', itemRouter);
app.use(express.static(path.join(__dirname, '/pub')));

app.set('views', path.join(__dirname, '/views'));

app.engine('hbs',expressHandlebars({
    extname : 'hbs', 
    defaultLayout : 'mainLayout',
    layoutsDir : __dirname + '/views/layouts'
}));

app.set('view engine', 'hbs');

app.listen('3000', ()=>{
    console.log('server started');
});

