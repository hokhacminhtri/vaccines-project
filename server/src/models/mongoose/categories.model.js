const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categoriesSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const Category = mongoose.model('Category', categoriesSchema, 'categories');

module.exports = Category;
