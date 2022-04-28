const { DataTypes, mysqlDb } = require('../../configs/sequelize.config');
const Registration = require('./registration.model');

const InjectionHistory = mysqlDb.define(
  'injectionHistory',
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
  { tableName: 'injectionHistory', timestamps: false, initialAutoIncrement: 1 },
);

// Foreign key
Registration.hasMany(InjectionHistory, {
  sourceKey: 'registrationId',
  foreignKey: {
    name: 'registrationId',
    allowNull: false,
  },
  onUpdate: 'CASCADE',
  onDelete: 'RESTRICT',
});
InjectionHistory.belongsTo(Registration, {
  sourceKey: 'registrationId',
});

module.exports = InjectionHistory;
