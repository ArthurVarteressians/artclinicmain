const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const db = require("../database");

const SECRET = "1I1d6WhwZWjGn4ijZDpBaGq";

const verifyDocToken = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];

  if (!token) {
    return res.status(403).send("Access denied");
  }

  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) {
      console.error("Error verifying JWT token:", err);
      return res.status(401).json({ error: "Invalid token" });
    }
    req.decodedToken = decoded;
    next();
  });
};

router.get("/closedAppointments", verifyDocToken, (req, res) => {
  const doctor_id = req.decodedToken.id;
  const query = `
    SELECT a.appointmentnumber, 
           DATE_FORMAT(a.appointment_date, '%Y-%m-%d %H:%i:%s') AS appointment_date, 
           a.appointment_status,
           p.name,
           p.phonenumber
    FROM appointments a
    JOIN patientslist p ON a.patient_id = p.id
    WHERE a.doctor_id = ? AND a.appointment_status = 1
  `;
  db.query(query, [doctor_id], (error, results) => {
    if (error) {
      console.error("Error retrieving closed appointments:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.json(results);
  });
});

module.exports = router;
