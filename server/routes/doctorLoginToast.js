const express = require("express");
const jwt = require("jsonwebtoken");
const db = require("../database");
const router = express.Router();
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
      SELECT fullname
      FROM doctors
      WHERE doctor_id = ?;
    `;

  db.query(query, [doctor_id], (error, results) => {
    if (error) {
      console.error(error);
      res.sendStatus(500);
    } else {
      if (results && results.length > 0) {
        const doctorFullName = results[0].fullname;
        res.send(doctorFullName);
      } else {
        res.sendStatus(404);
      }
    }
  });
});
module.exports = router;
