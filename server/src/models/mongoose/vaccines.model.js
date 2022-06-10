const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vaccinesSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  concept: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  avt: {
    type: String,
    required: true,
  },
  products: [
    {
      mfg: {
        type: Date,
        required: true,
      },
      exp: {
        type: Date,
        required: true,
      },
      status: {
        type: Boolean,
        required: true,
      },
    },
  ],
  info: {
    type: String,
    required: false,
  },
  categories: [
    {
      categoryId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Category',
      },
      name: String,
    },
  ],
});

const Vaccine = mongoose.model('Vaccine', vaccinesSchema, 'vaccines');

module.exports = Vaccine;
