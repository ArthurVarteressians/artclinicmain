const express = require("express");
const router = express.Router();
const db = require("../database");

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  // Validate that id is a valid number
  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid id parameter. Must be a number." });
  }

  db.query("DELETE FROM callrequests WHERE id = ?", [id], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Server error" });
    } else {
      res.send(result);
    }
  });
});

module.exports = router;
