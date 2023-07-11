const dotenv = require('dotenv');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error("Couldn't find .env file");
}

module.exports = {
  port: parseInt(process.env.PORT, 10),
  databaseHost: process.env.DB_HOST,
  databaseName: process.env.DB_NAME,
  databasePort: process.env.DB_PORT,
  databaseUser: process.env.DB_USER,
  databasePassword: process.env.DB_PASSWORD,
  jwtSecret: process.env.JWT_SECRET,
  jwtAlgorithm: process.env.JWT_ALGO,
};
