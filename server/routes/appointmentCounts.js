const express = require("express");
const router = express.Router();
const db = require("../database");

router.get("/", (req, res) => {
  const query = `
    SELECT d.department AS departmentName, d.fullname AS doctorName, COUNT(*) AS count
    FROM appointments AS a
    INNER JOIN doctors AS d ON a.doctor_id = d.doctor_id
    WHERE MONTH(a.appointment_date) = ? AND YEAR(a.appointment_date) = ?
    GROUP BY d.department, d.fullname;
  `;
  db.query(
    query,
    [new Date().getMonth() + 1, new Date().getFullYear()],
    (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch appointment counts" });
      } else {
        res.json(results);
      }
    }
  );
});

module.exports = router;
