const expressLoader = require('./loaders/express');
const postgresLoader = require('./loaders/postgres');

async function startServer() {
  try {
    await postgresLoader();
    await expressLoader();

    console.log('Express app has been initialized.');

  } catch (error) {
    console.error('Error occurred during server startup:', error);
    process.exit(1);
  }
}

startServer();
