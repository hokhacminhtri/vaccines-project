const { DataTypes, mysqlDb } = require('../../configs/sequelize.config');

const AdminAccount = mysqlDb.define(
  'adminAccounts',
  {
    adminId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(72),
      allowNull: false,
    },
  },
  { tableName: 'adminAccounts', timestamps: true, initialAutoIncrement: 1 },
);

module.exports = AdminAccount;
