const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
  name:{ type: String, required: true},
  description: { type: String },
  price: { type: Number, required: true },
  image: { type: String },
  category: { type: String },
  stock: { type: Number, default: 0 },
  collection:[{type:String, default: 'normie'}],
  sizes:[{type:String, required:true}],
  colors:[{type:String}]

}, { timestamps: true })

module.exports = mongoose.model('Product' ,productSchema);