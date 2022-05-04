const Customer = require('../models/mysql/customers.model');

exports.getInfoByMemberCode = async (req, res) => {
  try {
    const code = req.params.code?.trim();
    if (!code) {
      throw new Error('member code is required !');
    }

    const customer = await Customer.findOne({ raw: true, where: { code } });
    if (customer) {
      return res.status(200).json(customer);
    }

    return res.status(404).json({});
  } catch (error) {
    console.error('Function getInfoByMemberCode Error: ', error);
    return res.status(500).json({});
  }
};
