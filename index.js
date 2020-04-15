const connection = require("./models");
const express = require("express");
const application = express();
const path = require("path");
const expressHandlebars = require("express-handlebars");
const bodyparser = require("body-parser");
const ItemController = require("./controllers/itemController")

application.use(bodyparser.urlencoded({
    extended : true
}));

application.use(bodyparser.json());

application.use(express.static(path.join(__dirname, 'views')));


application.listen("3000", ()=>{
    console.log("Server started");
});

