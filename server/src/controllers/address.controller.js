const District = require('../models/mysql/districts.model');
const Province = require('../models/mysql/provinces.model');
const Ward = require('../models/mysql/wards.model');

exports.getAllProvinces = async (req, res) => {
  try {
    const provinces = await Province.findAll({ raw: true });
    return res.status(200).json(provinces);
  } catch (error) {
    console.error('Function getAllProvinces Error: ', error);
    return res.status(500).json([]);
  }
};

exports.getDistrictsByProvinceId = async (req, res) => {
  try {
    const { provinceId } = req.params;
    const districts = await District.findAll({
      raw: true,
      where: { provinceId },
      attributes: { exclude: ['provinceId'] },
    });
    return res.status(200).json(districts);
  } catch (error) {
    console.error('Function getDistrictsByProvinceId Error: ', error);
    return res.status(500).json();
  }
};

exports.getWardsByDistrictId = async (req, res) => {
  try {
    const districtId = Number(req.params.districtId);
    const wards = await Ward.findAll({
      raw: true,
      where: { districtId },
      attributes: { exclude: ['districtId'] },
    });
    return res.status(200).json(wards);
  } catch (error) {
    console.error('Function getWardsByDistrictId Error: ', error);
    return res.status(500).json();
  }
};
