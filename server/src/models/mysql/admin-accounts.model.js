const { DataTypes, db } = require("../../configs/sequelize.config");

const addresses = db.define(
  "addresses",
  {
    adminId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    detail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { tableName: "addresses", timestamps: false, initialAutoIncrement: 1 }
);

// Foreign key

module.exports = addresses;
