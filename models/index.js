const mongoose = require('mongoose');
const Item = require('./item');

mongoose.connect('mongodb://localhost:27017/netless', { useNewUrlParser: true, useUnifiedTopology: true}, (error) =>{
    if (!error) {
        console.log('success');
    } else {
        console.log('error connecting to database.');
    }   
});

require('../config/passport');