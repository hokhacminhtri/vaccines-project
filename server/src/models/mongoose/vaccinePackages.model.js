const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vaccinePackagesSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  prevention: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  vaccines: [
    {
      vaccineId: {
        type: Schema.Types.ObjectId,
        required: true,
      },
      vaccineName: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
});

const VaccinePackages = mongoose.model(vaccinePackagesSchema);

module.exports = VaccinePackages;
