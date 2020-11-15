const productDetailModel = require('../models/productDetailModel');

exports.index = (req, res, next) => {
    // Get books from model
    const productDetail = productDetailModel.detail();
    // Pass data to view to display list of books
    res.render('productDetail',{title:'Product Detail',productDetail})
};