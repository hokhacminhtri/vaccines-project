const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categoriesSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  vaccines: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Vaccine',
    },
  ],
  vaccinePackages: [
    {
      type: Schema.Types.ObjectId,
      ref: 'VaccinePackage',
    },
  ],
});

const Category = mongoose.model('Category', categoriesSchema, 'categories');

module.exports = Category;
