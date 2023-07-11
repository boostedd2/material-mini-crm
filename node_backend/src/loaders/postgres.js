const { Pool } = require('pg');
const config = require('../config');

async function postgresLoader() {
  const pool = new Pool({
    user: config.databaseUser,
    password: config.databasePassword,
    host: config.databaseHost,
    port: config.databasePort,
    database: config.databaseName,
  });

  try {
    await pool.connect();

    console.log('Connected to PostgreSQL database');

  } catch (error) {
    console.error('Error connecting to PostgreSQL database:', error);
    throw error;
  }
}

module.exports = postgresLoader;
