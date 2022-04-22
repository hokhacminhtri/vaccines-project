const Sequelize = require("sequelize").Sequelize;
const { Op, DataTypes } = require("sequelize");

const { MYSQL_HOST, MYSQL_DB_NAME, MYSQL_USERNAME, MYSQL_PASSWORD } =
  process.env;

const mysqlDb = new Sequelize(MYSQL_DB_NAME, MYSQL_USERNAME, MYSQL_PASSWORD, {
  host: MYSQL_HOST || "localhost",
  dialect: "mysql",
  logging: false,
});

module.exports = {
  mysqlDb,
  Op,
  DataTypes,
};
