const mysql = require("mysql2");

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "123456789",
    database: "artclinic",
  });

  module.exports = db;
