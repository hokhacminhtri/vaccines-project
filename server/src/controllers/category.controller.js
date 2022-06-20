const Category = require('../models/mongoose/categories.model');
const { createClient } = require('redis');
const { REDIS_KEY } = require('../constants/redis-key');

exports.getAllCategories = async (req, res) => {
  try {
    const redisClient = createClient();
    await redisClient.connect();
    const cachedDocs = await redisClient.get(REDIS_KEY.CATEGORY_ALL);
    let categories = [];

    if (cachedDocs) {
      categories = JSON.parse(cachedDocs);
    } else {
      categories = await Category.find({}).select('name _id');
    }

    await redisClient.disconnect();
    return res.status(200).json(categories);
  } catch (error) {
    await redisClient.disconnect();
    console.error('Function getAllCategory Error: ', error);
    return res.status(500).json([]);
  }
};
