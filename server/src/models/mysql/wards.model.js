const { DataTypes, db } = require("../../configs/sequelize.config");
const districts = require("./districts.model");

const wards = db.define(
  "wards",
  {
    wardId: {
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
  { tableName: "wards", timestamps: false, initialAutoIncrement: 1 }
);

// Foreign key
districts.hasMany(wards, {
  sourceKey: "districtId",
  foreignKey: {
    name: "districtId",
    allowNull: false,
  },
});
wards.belongsTo(districts, {
  foreignKey: "districtId",
});

module.exports = wards;
