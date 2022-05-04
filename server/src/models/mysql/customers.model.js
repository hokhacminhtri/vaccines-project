const { DataTypes, mysqlDb } = require('../../configs/sequelize.config');
const Address = require('./addresses.model');

const Customer = mysqlDb.define(
  'customers',
  {
    customerId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fullName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    gender: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false, // nam
    },
    phone: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
  },
  { tableName: 'customers', timestamps: false, initialAutoIncrement: 1 },
);

// Foreign key
Address.hasOne(Customer, {
  sourceKey: 'addressId',
  foreignKey: {
    name: 'addressId',
    allowNull: false,
  },
  onUpdate: 'CASCADE',
  onDelete: 'RESTRICT',
});
Customer.belongsTo(Address, {
  foreignKey: 'addressId',
});

module.exports = Customer;
