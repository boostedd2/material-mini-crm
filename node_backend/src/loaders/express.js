const express = require('express');
const bodyParser = require('body-parser');
const config = require('../config');
const registerRoutes = require('../api/routes/register');
const loginRoutes = require('../api/routes/login');
const sequelizeLoader = require('../loaders/sequelize');

  async function expressLoader() {
  const app = express();
  const port = config.port;

  app.use(bodyParser.json());

  await sequelizeLoader();

  app.use('/register', registerRoutes);
  app.use('/login', loginRoutes);


  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

module.exports = expressLoader;
