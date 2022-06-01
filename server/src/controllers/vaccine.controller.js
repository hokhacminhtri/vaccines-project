const Vaccine = require('../models/mongoose/vaccines.model');
const { mongoosePaginate } = require('../mongoose-paginate');
const DEFAULT = require('../constants/default');

exports.getAllVaccines = async (req, res) => {
  try {
    const { select = '' } = req.query;
    const vaccines = await Vaccine.find({}).select(select);
    return res.status(200).json(vaccines);
  } catch (error) {
    console.error('getAllVaccines ERROR: ', error);
    return res.status(500).json([]);
  }
};

exports.getVaccineList = async (req, res) => {
  try {
    let page = req.query?.page || 1;
    const { select = '', sort = 'price' } = req.query;

    const docs = await mongoosePaginate(
      Vaccine,
      {},
      { page: Number(page), pageSize: DEFAULT.PAGE_SIZE },
      { sort, select },
    );

    return res.status(200).json(docs);
  } catch (error) {
    console.error('Function getVaccines Error: ', error);
    return res.status(500).json();
  }
};
