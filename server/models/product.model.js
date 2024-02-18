import mongoose from 'mongoose'
//const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Name is required'
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
  category: {
    type: String,
    trim: true,
    required: 'category is required'
  },
  salt: String
});
//module.exports = mongoose.model('User', UserSchema);
export default mongoose.model('products', ProductSchema);

