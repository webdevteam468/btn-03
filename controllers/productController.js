const productModel = require('../models/productModel');

exports.index = (req, res, next) => {
    // Get books from model
    const product = productModel.list();
    // Pass data to view to display list of books
    res.render('store',{title:'Store',product})
};