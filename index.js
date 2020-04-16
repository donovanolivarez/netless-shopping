const connection = require('./models');
const express = require('express');
const path = require('path');
const expressHandlebars = require('express-handlebars');
const bodyparser = require('body-parser');
const indexRoute = require('./routes/indexRoutes');
const cartRouter = require('./routes/cartRoutes');
const itemRouter = require('./routes/itemRoutes');

const app = express();


app.use(bodyparser.urlencoded({
    extended: true
}));

/*
app.get('/home', (req, res)=> {
    res.redirect('/index');
});
*/

app.use('/', indexRoute);
app.use('/cart', cartRouter);
app.use('/item', itemRouter);

app.set('views', path.join(__dirname, '/views'));

app.engine('hbs',expressHandlebars({
    extname : 'hbs', 
    defaultLayout : 'mainLayout',
    layoutsDir : __dirname + '/views/layouts'
}));

app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'pub')));


app.listen('3000', ()=>{
    console.log('server started');
});

