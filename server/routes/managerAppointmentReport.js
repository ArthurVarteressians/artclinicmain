const express = require("express");
const router = express.Router();
const db = require("../database");

router.get("/", (req, res) => {
  const { doctorId } = req.query;
  const query = `
    SELECT a.*, d.fullname AS doctor_name, p.name AS patient_name, p.phonenumber AS patient_phone_number
    FROM appointments AS a
    JOIN doctors AS d ON a.doctor_id = d.doctor_id
    JOIN patientslist AS p ON a.patient_id = p.id
    WHERE a.doctor_id = ?
  `;

  db.query(query, [doctorId], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred while fetching appointments." });
    } else {
      res.json(results);
    }
  });
});

module.exports = router;
