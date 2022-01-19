const mysql = require('mysql');
require('dotenv').config();

// Create a connection to the database
const connection = mysql.createConnection({
  database: `${process.env.DB}`,
  host: `${process.env.DB_HOST}`,
  user: `${process.env.DB_USER}`,
  password: `${process.env.DB_USER_PASSWORD}`,
});

// open the MySQL connection
connection.connect((error) => {
  if (error) throw error;
  // eslint-disable-next-line no-console
  console.log('Successfully connected to the database.');
});

module.exports = connection;
