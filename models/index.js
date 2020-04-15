const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/netless", { useNewUrlParser: true, useUnifiedTopology: true },  (error)=> {
    if(!error){
        console.log("Successful Connection");
    } else {
        console.log("Error connecting to database.");
    }
});

const Item = require("./itemModel");