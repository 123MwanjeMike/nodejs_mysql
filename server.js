const express = require('express');
require('dotenv').config();

const app = express();

// parse requests of content-type: application/json
app.use(express.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to node_mysql rest api crud application.' });
});

require('./routes/customer.routes')(app);

const port = process.env.PORT || 3000;

// set port, listen for requests
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${port}.`);
});
