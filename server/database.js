const mysql = require("mysql2");

const db = mysql.createConnection({
    user: "root",
    host: "localhost",  // Make sure to use 127.0.0.1 instead of localhost
    password: "Arthurva13@",  // Use the correct password
    database: "artclinic",
    port: 3306,  // MySQL port
    connectTimeout: 10000  // Optional: Set a timeout for the connection (10 seconds)
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the MySQL database.');
  }
});

module.exports = db;
