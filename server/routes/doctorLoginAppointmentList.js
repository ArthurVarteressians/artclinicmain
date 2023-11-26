const express = require("express");
const router = express.Router();
const db = require("../database");
const jwt = require("jsonwebtoken");
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

router.get("/", verifyDocToken, (req, res) => {
  const doctor_id = req.decodedToken.id;

  const query = `
  SELECT a.appointmentnumber, a.doctor_id, a.patient_id, a.appointment_date, a.appointment_status, d.fullname, d.department, p.name as name, p.phonenumber
  FROM appointments a
  JOIN doctors d ON a.doctor_id = d.doctor_id
  JOIN patientslist p ON a.patient_id = p.id
  WHERE a.doctor_id = ? AND a.appointment_status = 0;
`;


  db.query(query, [doctor_id], (error, results) => {
    if (error) {
      console.error(error);
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  });
});
module.exports = router;
