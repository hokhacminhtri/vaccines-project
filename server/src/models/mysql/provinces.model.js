const { DataTypes, db } = require("../../configs/sequelize.config");

const provinces = db.define(
  "provinces",
  {
    districtId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    code: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  { tableName: "provinces", timestamps: false, initialAutoIncrement: 1 }
);

module.exports = provinces;
