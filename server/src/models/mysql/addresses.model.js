const { DataTypes, db } = require("../../configs/sequelize.config");
const wards = require("./wards.model");
const registration = require("./registration.model");

const addresses = db.define(
  "addresses",
  {
    addressId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    detail: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { tableName: "addresses", timestamps: false, initialAutoIncrement: 1 }
);

// Foreign key
wards.hasMany(addresses, {
  sourceKey: "wardId",
  foreignKey: {
    name: "wardId",
    allowNull: false,
  },
  onUpdate: "CASCADE",
  onDelete: "NULL",
});
addresses.belongsTo(wards, {
  foreignKey: "wardId",
});

registration.hasMany(addresses, {
  sourceKey: "registrationId",
  foreignKey: {
    name: "registrationId",
    allowNull: false,
  },
});
addresses.belongsTo(registration, {
  foreignKey: "registrationId",
});

module.exports = addresses;
