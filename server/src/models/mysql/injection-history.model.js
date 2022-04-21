const { DataTypes, db } = require("../../configs/sequelize.config");

const injectionHistory = db.define(
  "injectionHistory",
  {
    historyId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    injectionDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    doctorName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  { tableName: "injectionHistory", timestamps: false, initialAutoIncrement: 1 }
);

// Foreign key

module.exports = injectionHistory;
