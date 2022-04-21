const { DataTypes, db } = require("../../configs/sequelize.config");

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

module.exports = wards;
