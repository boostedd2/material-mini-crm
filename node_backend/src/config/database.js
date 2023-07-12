const { Sequelize } = require('sequelize');
const config = require('../config');

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: config.databaseHost,
  port: config.databasePort,
  username: config.databaseUser,
  password: config.databasePassword,
  database: config.databaseName,
});

module.exports = sequelize;
