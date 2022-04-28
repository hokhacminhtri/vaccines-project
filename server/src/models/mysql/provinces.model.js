const { DataTypes, mysqlDb } = require('../../configs/sequelize.config');

const Province = mysqlDb.define(
  'provinces',
  {
    provinceId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    code: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  { tableName: 'provinces', timestamps: false },
);

module.exports = Province;
