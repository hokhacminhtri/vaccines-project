const Vaccine = require('../models/mongoose/vaccines.model');

exports.getAllVaccines = async (req, res) => {
  try {
    const vaccines = await Vaccine.find({});
    return res.status(200).json(vaccines);
  } catch (error) {
    console.error('getAllVaccines ERROR: ', error);
    return res.status(500).json([]);
  }
};
