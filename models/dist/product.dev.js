"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var productSchema = new Schema({
  productName: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  aboutProduct: {
    type: String,
    required: true
  },
  productLocation: {
    type: String,
    required: true
  } // add downlong a picture for the team later

}, {
  timestamps: true
});
var Product = mongoose.model('Product', productSchema);
module.exports = Product;