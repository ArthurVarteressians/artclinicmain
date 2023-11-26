const express = require("express");
const router = express.Router();
const db = require("../database");


router.put("/:appointments", (req, res) => {
  const appointmentnumber = req.params.appointments;
  const { status } = req.body;

  const query =
    "UPDATE appointments SET appointment_status = ? WHERE appointmentnumber = ?";
  db.query(query, [status, appointmentnumber], (error, results) => {
    if (error) {
      console.error("Error updating appointment status:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.sendStatus(200);
  });
});

module.exports = router;
