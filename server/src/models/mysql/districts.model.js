const { DataTypes, db } = require("../../configs/sequelize.config");

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

module.exports = districts;
