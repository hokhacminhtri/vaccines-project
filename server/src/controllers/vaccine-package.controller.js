const VaccinePackage = require('../models/mongoose/vaccine-packages.model');
const { mongoosePaginate } = require('../mongoose-paginate');
const DEFAULT = require('../constants/default');

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

exports.getPackageList = async (req, res) => {
  try {
    let page = req.query?.page || 1;
    const { select = '', sort = 'price' } = req.query;

    const docs = await mongoosePaginate(
      VaccinePackage,
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

exports.getPackageInfo = async (req, res) => {
  try {
    const { packageId } = req.params;
    const package = await VaccinePackage.findOne({ _id: packageId }).populate({
      path: 'vaccines.vaccineId',
      select: 'name country price concept avt',
    });
    return res.status(200).json(package);
  } catch (error) {
    console.error('Function getPackageInfo Error: ', error);
    return res.status(500).json();
  }
};
