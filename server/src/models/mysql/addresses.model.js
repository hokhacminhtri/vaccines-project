const { DataTypes, mysqlDb } = require('../../configs/sequelize.config');
const Ward = require('./wards.model');
const Customer = require('./customers.model');

const Address = mysqlDb.define(
  'addresses',
  {
    addressId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    detail: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { tableName: 'addresses', timestamps: false, initialAutoIncrement: 1 },
);

// Foreign key
Ward.hasMany(Address, {
  sourceKey: 'wardId',
  foreignKey: {
    name: 'wardId',
    allowNull: false,
  },
  onUpdate: 'CASCADE',
  onDelete: 'RESTRICT',
});
Address.belongsTo(Ward, {
  foreignKey: 'wardId',
});

Customer.hasMany(Address, {
  sourceKey: 'customerId',
  foreignKey: {
    name: 'customerId',
    allowNull: false,
  },
  onUpdate: 'CASCADE',
  onDelete: 'RESTRICT',
});
Address.belongsTo(Customer, {
  foreignKey: 'customerId',
});

module.exports = Address;
