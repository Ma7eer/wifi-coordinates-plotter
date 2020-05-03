const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "84.242.33.190",
  user: "client",
  password: "client",
  database: "wifi",
  port: 3306,
});

module.exports = connection;
