const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

router.get('/item-detail', itemController.itemDetail);

module.exports = router;