const { DataTypes, mysqlDb } = require('../../configs/sequelize.config');

const Customer = mysqlDb.define(
  'customers',
  {
    customerId: {
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
    timesOfRegistration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { tableName: 'customers', timestamps: false, initialAutoIncrement: 1 },
);

module.exports = Customer;
