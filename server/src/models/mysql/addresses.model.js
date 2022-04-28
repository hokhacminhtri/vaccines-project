const { DataTypes, mysqlDb } = require('../../configs/sequelize.config');
const Ward = require('./wards.model');
const Registration = require('./registration.model');

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

Registration.hasMany(Address, {
  sourceKey: 'registrationId',
  foreignKey: {
    name: 'registrationId',
    allowNull: false,
  },
  onUpdate: 'CASCADE',
  onDelete: 'RESTRICT',
});
Address.belongsTo(Registration, {
  foreignKey: 'registrationId',
});

module.exports = Address;
