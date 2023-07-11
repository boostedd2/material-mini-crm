const express = require('express');
const config = require('../config');

async function expressLoader() {
  const app = express();
  const port = config.port;

  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

module.exports = expressLoader;
