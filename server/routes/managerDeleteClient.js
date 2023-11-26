const express = require("express");
const router = express.Router();
const db = require("../database");

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM patientslist WHERE id = ?", [id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: "Server error" });
    } else {
      res.send(result);
    }
  });
});

module.exports = router;
