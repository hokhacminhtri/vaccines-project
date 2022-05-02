const { DataTypes, mysqlDb } = require('../../configs/sequelize.config');
const { PRODUCT_TYPE } = require('../../constants');
const Customer = require('./customers.model');
const VNVCCenter = require('./vnvc-centers.model');

const productTypes = [];
for (const key in PRODUCT_TYPE) {
  productTypes.push(PRODUCT_TYPE[key]);
}

const Registration = mysqlDb.define(
  'registration',
  {
    registrationId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    productId: {
      type: DataTypes.STRING(24), // vaccine hoac vaccinePackage
      allowNull: false,
    },
    productType: {
      type: DataTypes.ENUM(productTypes),
      allowNull: false,
    },
    registrationDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(),
    },
    relName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    relPhone: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    relRelationship: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { tableName: 'registration', timestamps: false, initialAutoIncrement: 1 },
);

// Foreign key
Customer.hasMany(Registration, {
  sourceKey: 'customerId',
  foreignKey: {
    name: 'customerId',
    allowNull: false,
  },
  onUpdate: 'CASCADE',
  onDelete: 'RESTRICT',
});
Registration.belongsTo(Customer, {
  foreignKey: 'customerId',
});

VNVCCenter.hasMany(Registration, {
  sourceKey: 'centerId',
  foreignKey: {
    name: 'centerId',
    allowNull: false,
  },
  onUpdate: 'CASCADE',
  onDelete: 'RESTRICT',
});
Registration.belongsTo(VNVCCenter, {
  foreignKey: 'centerId',
});

module.exports = Registration;
