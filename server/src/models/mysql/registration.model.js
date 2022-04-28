const { DataTypes, mysqlDb } = require('../../configs/sequelize.config');
const { PRODUCT_TYPE } = require('../../constants');

const productTypes = [];
for (const key in PRODUCT_TYPE) {
  productTypes.push(PRODUCT_TYPE[key]);
}

const Registration = mysqlDb.define(
  'registration',
  {
    registrationId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    gender: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    phone: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    productId: {
      type: DataTypes.STRING(24), // vaccine hoac vaccinePackage
      allowNull: false,
    },
    productType: {
      type: DataTypes.ENUM(productTypes),
      allowNull: false,
    },
    registrationDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(),
    },
  },
  { tableName: 'registration', timestamps: false, initialAutoIncrement: 1 },
);

module.exports = Registration;
