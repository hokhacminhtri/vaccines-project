const Customer = require('../models/mysql/customers.model');
const mongoose = require('mongoose');
const Registration = require('../models/mysql/registration.model');
const { PRODUCT_TYPE, REGISTRATION_STATUS } = require('../constants');

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

exports.postRegistration = async (req, res) => {
  try {
    const { isRegistered, info, contactInfo, center, vaccine } = req.body;
    let customerId = null;

    if (isRegistered) {
      // Find customer
      const { memberCode } = info;
      const customer = await Customer.findOne({
        raw: true,
        where: { code: memberCode },
      });
      if (customer) {
        customerId = customer.customerId;
      } else {
        throw new Error('Mã thành viên không hợp lệ');
      }
    } else {
      // Create a customer
      const code = mongoose.Types.ObjectId().toString().slice(0, 12);
      const { fullName, birthday, gender, phone } = info;
      const customer = await Customer.create({
        code,
        fullName,
        birthday: new Date(birthday),
        gender: Boolean(gender),
        phone,
      });

      if (customer) {
        customerId = customer.customerId;
      }
    }

    const { relName, relPhone, relRelationship } = contactInfo;
    const registration = await Registration.create({
      productId: vaccine._id,
      customerId,
      productType: vaccine.isPackage
        ? PRODUCT_TYPE.VACCINE_PACKAGE
        : PRODUCT_TYPE.VACCINE,
      centerId: Number(center),
      relName,
      relPhone,
      relRelationship,
      status: REGISTRATION_STATUS.WAITING,
    });

    if (registration) {
      return res.status(200).json({ msg: 'Success' });
    }
    return res.status(500).json();
  } catch (error) {
    console.error('Function postRegistration Error: ', error);
    return res.status(500).json();
  }
};
