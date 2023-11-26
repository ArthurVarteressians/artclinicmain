const express = require("express");
const router = express.Router();
const db = require("../database");

router.get("/", (req, res) => {
  const query =
    "SELECT DAY(registration_date) as day, COUNT(*) as count FROM patientslist WHERE patient_status = 0 AND MONTH(registration_date) = ? AND YEAR(registration_date) = ? GROUP BY DAY(registration_date) HAVING COUNT(*) > 0;";
  db.query(
    query,
    [new Date().getMonth() + 1, new Date().getFullYear()],
    (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch client counts" });
      } else {
        const lastDayOfMonth = new Date(
          new Date().getFullYear(),
          new Date().getMonth() + 1,
          0
        ).getDate();
        const clientCounts = Array.from({ length: lastDayOfMonth }, (_, i) => {
          const day = i + 1;
          const count =
            results.find((result) => result.day === day)?.count || 0;
          return count;
        });
        res.json(clientCounts);
      }
    }
  );
});
module.exports = router;
