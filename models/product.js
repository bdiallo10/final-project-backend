const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const productSchema = new Schema({
    productName: {type: String, required: true},
    price: {type: String, required: true},
    aboutProduct: {type: String, required: true},
    productLocation: {type: String, required: true}
}, { timestamps: true,
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product