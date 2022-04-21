const { DataTypes, db } = require("../../configs/sequelize.config");

const payment = db.define(
  "payment",
  {
    paymentId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    total: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    paymentMethod: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    transactionId: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  { tableName: "payment", timestamps: false, initialAutoIncrement: 1 }
);

// Foreign key

module.exports = payment;
