const VaccinePackage = require('../models/mongoose/vaccine-packages.model');
const { mongoosePaginate } = require('../mongoose-paginate');
const DEFAULT = require('../constants/default');
const redis = require('redis');
const client = redis.createClient(6279);

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
    const key = 'vaccinepakagelist' + page + select + sort;

    client.get(key, function (err, data) {
      if (err) {
        console.error('Function getVaccines Error: ', error);
        return res.status(500).json();
      }
      if (data != null) {
        return JSON.parse(data);
      }
    });
    const docs = await mongoosePaginate(
      VaccinePackage,
      {},
      { page: Number(page), pageSize: DEFAULT.PAGE_SIZE },
      { sort, select },
    );
    client.setex(key, 3600, JSON.stringify(docs));
    return res.status(200).json(docs);
  } catch (error) {
    console.error('Function getVaccines Error: ', error);
    return res.status(500).json();
  }
};

exports.getPackageInfo = async (req, res) => {
  try {
    const { packageId } = req.params;
    const key = 'packageinfo' + packageId;
    client.get(key, function (err, data) {
      if (err) {
        console.error('Function getVaccines Error: ', error);
        return res.status(500).json();
      }
      if (data != null) return JSON.parse(data);
    });
    const package = await VaccinePackage.findOne({ _id: packageId }).populate({
      path: 'vaccines.vaccineId',
      select: 'name country price concept avt',
    });
    client.setex(key, 3600, JSON.stringify(package));
    return res.status(200).json(package);
  } catch (error) {
    console.error('Function getPackageInfo Error: ', error);
    return res.status(500).json();
  }
};

exports.getVaccinesPackageDetail = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const vacincePackages = await VaccinePackage.aggregate([
      {
        $lookup: {
          from: 'vaccines',
          localField: 'category.categoryId',
          foreignField: '_id',
          as: 'vaccineDetail',
        },
      },
    ]);
    res.status(200).json(vacincePackages);
  } catch (error) {
    console.error('Function getVaccinesPackageDetail Error: ', error);
    return res.status(500).json();
  }
};
