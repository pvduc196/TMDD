// Import model
const Product = require('../models/product.model');

module.exports = {
  get: (req, res) => {
    Product.find({}, (err, products) => {
      res.render('homepage', products);
    });
  },
};
