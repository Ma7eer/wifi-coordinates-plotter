const pg = require("pg");

const connectionString =
  "postgres://tssqlzsa:UTkycJyhq68aCmHiZH8JwsMWKF9zdYaC@dumbo.db.elephantsql.com:5432/tssqlzsa";

const client = new pg.Client(connectionString);

module.exports = client;
