const { DataTypes, mysqlDb } = require("../../configs/sequelize.config");
const Registration = require("./registration.model");

const Payment = mysqlDb.define(
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
Registration.hasOne(Payment, {
  sourceKey: "registrationId",
  foreignKey: {
    name: "registrationId",
    allowNull: false,
  },
  onUpdate: "CASCADE",
  onDelete: "RESTRICT",
});
Payment.belongsTo(Registration, {
  foreignKey: "registrationId",
});

module.exports = Payment;
