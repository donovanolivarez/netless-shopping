var Item = require('../models/itemModel');

// Display list of all Authors.
exports.item_list = function(req, res) {
    res.send('NOT IMPLEMENTED: item list');
};

// Display detail page for a specific Author.
exports.item_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: item detail: ' + req.params.id);
};

// Display Author create form on GET.
exports.item_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: item create GET');
};

// Handle Author create on POST.
exports.item_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: item create POST');
};

// Display Author delete form on GET.
exports.item_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: item delete GET');
};

// Handle Author delete on POST.
exports.item_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: item delete POST');
};

// Display Author update form on GET.
exports.item_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: item update GET');
};

// Handle Author update on POST.
exports.item_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: item update POST');
};