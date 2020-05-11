var express = require("express");
var router = express.Router();

const db = require("../database");

/* GET home page. */
router.get("/", function (req, res, next) {
  db.query("SELECT * FROM stations", (error, results1) => {
    if (error) throw error;
    // console.log(results1);
    db.query("SELECT * FROM entries", (error, results2, fields) => {
      if (error) throw error;
      db.end();
      return res.render("index", {
        entries: results2.rows,
        station: results1.rows[0],
      });
    });
  });
});

module.exports = router;
