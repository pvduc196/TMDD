const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: String,
  _category: mongoose.Schema.Types.ObjectID,
  price: Number,
  images: [String],
});

module.exports = mongoose.model('Product', ProductSchema);
