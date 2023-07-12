const sequelize = require('../config/database');
const models = require('../models');

async function sequelizeLoader() {
  try {
    for (const model of Object.values(models)) {
      await model.sync();
    }

    console.log('Models synchronized successfully');
  } catch (error) {
    console.error('Failed to synchronize models:', error);
    process.exit(1);
  }
}

module.exports = sequelizeLoader;
