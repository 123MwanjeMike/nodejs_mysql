const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

require('dotenv');

// Create a connection to the database
const connection = mysql.createConnection({
  database: `${process.env.DB}`,
  host: `${process.env.HOST}`,
  user: `${process.env.USER}`,
  password: `${process.env.PASSWORD}`,
});

// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;
