const { DataTypes, mysqlDb } = require('../../configs/sequelize.config');
const District = require('./districts.model');

const Ward = mysqlDb.define(
  'wards',
  {
    wardId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    prefix: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
  },
  { tableName: 'wards', timestamps: false },
);

// Foreign key
District.hasMany(Ward, {
  sourceKey: 'districtId',
  foreignKey: {
    name: 'districtId',
    allowNull: false,
  },
  onUpdate: 'CASCADE',
  onDelete: 'RESTRICT',
});
Ward.belongsTo(District, {
  foreignKey: 'districtId',
});

module.exports = Ward;
