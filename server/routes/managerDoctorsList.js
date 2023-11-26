const express = require("express");
const router = express.Router();
const db = require("../database");

router.get("/", (req, res) => {
  db.query("SELECT * FROM doctors", (error, results) => {
    if (error) {
      console.error("Error retrieving doctors:", error);
      res.status(500).json({ error: "Failed to retrieve doctors" });
    } else {
      res.json(results);
    }
  });
});

module.exports = router;
