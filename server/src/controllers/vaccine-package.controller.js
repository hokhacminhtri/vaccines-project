const VaccinePackage = require('../models/mongoose/vaccine-packages.model');
const { mongoosePaginate } = require('../mongoose-paginate');
const DEFAULT = require('../constants/default');
const { createClient } = require('redis');
const { REDIS_KEY, REDIS_TTL } = require('../constants/redis-key');
const mongoose = require('mongoose');

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
    const { select = '', sort = 'price', categoryId = '' } = req.query;
    const redisClient = createClient();

    await redisClient.connect();
    const redisKey = `${REDIS_KEY.VACCINE_PACKAGE_LIST}-${page}-${select}-${sort}`;
    const cachedDocs = await redisClient.get(redisKey);
    let vaccinePackages = {};

    if (cachedDocs) {
      vaccinePackages = JSON.parse(cachedDocs);
    } else {
      const query = categoryId
        ? { 'categories.categoryId': new mongoose.Types.ObjectId(categoryId) }
        : {};
      vaccinePackages = await mongoosePaginate(
        VaccinePackage,
        query,
        { page: Number(page), pageSize: DEFAULT.PAGE_SIZE },
        { sort, select },
      );
      await redisClient.set(redisKey, JSON.stringify(vaccinePackages), {
        EX: REDIS_TTL.VACCINE_PACKAGE_LIST,
      });
    }

    await redisClient.disconnect();
    return res.status(200).json(vaccinePackages);
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
