var express = require('express');
var router = express.Router();

const productController = require('../controllers/productController');

/* GET list of goods. */
router.get('/', productController.index);


module.exports = router;
