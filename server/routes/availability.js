const express = require("express");
const router = express.Router();
const db = require("../database");
const moment = require("moment");

router.post("/", (req, res) => {
  const doctorId = req.body.doctorId;
  const date = req.body.date;
  const formattedDate = moment(date).format("YYYY-MM-DD");

  const query = `SELECT appointment_date FROM appointments WHERE doctor_id = ?`;

  db.query(query, [doctorId], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch available times" });
    } else {
      const bookedTimes = results
        .filter(
          (result) =>
            moment(result.appointment_date).format("YYYY-MM-DD") ===
            formattedDate
        )
        .map((result) => moment(result.appointment_date).format("HH:mm"));

      const availableTimes = getAvailableTimes(bookedTimes);
      res.status(200).json({ availableTimes });
    }
  });
});

function getAvailableTimes(bookedTimes) {
  const allTimes = ["10:00", "12:00", "14:00", "16:00"];
  const availableTimes = allTimes.filter((time) => !bookedTimes.includes(time));
  return availableTimes;
}

module.exports = router;
