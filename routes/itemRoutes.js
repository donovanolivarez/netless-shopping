const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

router.get('/:id/item-detail', itemController.itemDetail);

module.exports = router;