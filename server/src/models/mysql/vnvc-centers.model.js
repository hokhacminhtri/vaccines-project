const { DataTypes, mysqlDb } = require('../../configs/sequelize.config');
const Address = require('./addresses.model');

const VNVCCenter = mysqlDb.define(
  'vnvcCenters',
  {
    centerId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    openingTime: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    closingTime: {
      type: DataTypes.TIME,
    },
  },
  { tableName: 'vnvcCenters', timestamps: false },
);

// Foreign key
Address.hasMany(VNVCCenter, {
  sourceKey: 'addressId',
  foreignKey: {
    name: 'addressId',
    allowNull: false,
  },
  onUpdate: 'CASCADE',
  onDelete: 'RESTRICT',
});
VNVCCenter.belongsTo(Address, {
  foreignKey: 'addressId',
});

module.exports = VNVCCenter;
