const Vaccine = require('../models/mongoose/vaccines.model');

exports.vaccineMongoQuery = async (req, res) => {
  try {
    const keyword = req.query.keyword.toLowerCase();

    const timeStart = Date.now();
    const vaccines = await Vaccine.find({
      $or: [
        { name: { $regex: keyword, $options: 'mi' } },
        { concept: { $regex: keyword, $options: 'mi' } },
        { info: { $regex: keyword, $options: 'mi' } },
      ],
    });
    const timeEnd = Date.now();

    return res.json({
      title: `Tìm kiếm từ khoá "${keyword}" với Mongo Query`,
      matched: `Có ${vaccines.length} kết quả phù hợp`,
      time: `${((timeEnd - timeStart) / 1000).toFixed(2)} s`,
      vaccines: vaccines.map((v) => v._id),
    });
  } catch (error) {
    console.error('Function mongoFullTextSearch Error: ', error);
    return res.status(500).json();
  }
};
