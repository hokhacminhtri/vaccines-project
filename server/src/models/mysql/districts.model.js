const { DataTypes, mysqlDb } = require('../../configs/sequelize.config');
const Province = require('./provinces.model');

const District = mysqlDb.define(
  'districts',
  {
    districtId: {
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
  { tableName: 'districts', timestamps: false },
);

// Foreign key
Province.hasMany(District, {
  sourceKey: 'provinceId',
  foreignKey: {
    name: 'provinceId',
    allowNull: false,
  },
  onUpdate: 'CASCADE',
  onDelete: 'RESTRICT',
});
District.belongsTo(Province, {
  foreignKey: 'provinceId',
});

module.exports = District;
