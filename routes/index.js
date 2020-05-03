var express = require("express");
var router = express.Router();

const db = require("../database");

/* GET home page. */
router.get("/", function (req, res, next) {
  db.query("SELECT * FROM intries", (error, results, fields) => {
    if (error) throw error;
    return res.render("index", { data: results });
  });
});

module.exports = router;
