const { DataTypes, db } = require("../../configs/sequelize.config");
const provinces = require("./provinces.model");

const districts = db.define(
  "districts",
  {
    districtId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    prefix: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
  },
  { tableName: "districts", timestamps: false, initialAutoIncrement: 1 }
);

// Foreign key
provinces.hasMany(districts, {
  sourceKey: "provinceId",
  foreignKey: {
    name: "provinceId",
    allowNull: false,
  },
});
districts.belongsTo(provinces, {
  foreignKey: "provinceId",
});

module.exports = districts;
