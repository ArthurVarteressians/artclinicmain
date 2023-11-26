const express = require("express");
const router = express.Router();
const db = require("../database");

router.get("/:department", (req, res) => {
    const department = req.params.department;
    const query = `SELECT * FROM artclinic.doctors WHERE department = ?`;
    db.query(query, [department], (error, results) => {
      if (error) {
        res.status(500).json({ error: "Failed to fetch doctors" });
      } else {
        if (results.length > 0) {
          res.status(200).json(results);
        } else {
          res.status(404).json({ error: "No doctors found" });
        }
      }
    });
  });
  module.exports = router;
