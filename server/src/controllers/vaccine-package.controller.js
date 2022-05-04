const VaccinePackage = require('../models/mongoose/vaccine-packages.model');
const Vaccine = require('../models/mongoose/vaccines.model');

exports.getAllPackages = async (req, res) => {
  try {
    const { select = '' } = req.query;
    const vaccines = await VaccinePackage.find({}).select(select);
    return res.status(200).json(vaccines);
  } catch (error) {
    console.error('getAllPackages ERROR: ', error);
    return res.status(500).json([]);
  }
};
