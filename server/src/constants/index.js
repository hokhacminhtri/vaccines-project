module.exports = {
  PRODUCT_TYPE: {
    VACCINE: '0',
    VACCINE_PACKAGE: '1',
  },

  REGISTRATION_STATUS: {
    WAITING: 0,
  },

  GENDER: {
    MALE: false,
    FEMALE: true,
  },

  JWT_SECRET: process.env.JWT_SECRET || 'vaccine',
  JWT_EXP: 3 * 86400,
};
