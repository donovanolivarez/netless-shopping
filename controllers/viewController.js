exports.homeView = function(req,res) {
    res.render('../views/index');
};

exports.categoryView = function(req,res) {
    res.render('../views/categories');
}

exports.accountView = function(req,res) {
    res.render('../views/account');
}

exports.cartView = function(req,res) {
    res.render('../views/cart');
};

