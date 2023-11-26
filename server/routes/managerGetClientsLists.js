const express = require("express");
const router = express.Router();
const db = require("../database");

router.get("/", (req, res) => {
  db.query("SELECT * FROM patientslist", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
module.exports = router;
