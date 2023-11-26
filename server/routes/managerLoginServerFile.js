const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const db = require("../database");

const SECRET = "1I1d6WhwZWjGn4ijZDpBaGq";

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  const query = `SELECT * FROM managemenlogin WHERE email = ? AND password = ?`;
  db.query(query, [email, password], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      if (result.length > 0) {
        const user = result[0];
        let response;
        if (user.role === "doctor") {
          const token = jwt.sign({ id: user.id }, SECRET, {
            expiresIn: "2h",
          });
          response = {
            success: true,
            message: "Doctor login successful",
            doctorId: user.id,
            doctorEmail: user.email,
            token: token,
          };
          console.log(response.message);
        } else if (user.role === "manager") {
          const token = jwt.sign({ id: user.id }, SECRET, {
            expiresIn: "2h",
          });
          response = {
            success: true,
            message: "Manager login successful",
            managerId: user.id,
            managerEmail: user.email,
            token: token,
          };
          console.log(response.message);
        } else {
          res.status(401).json({ error: "Invalid role" });
          return;
        }
        res.status(200).json(response);
      } else {
        res.status(401).json({ error: "Invalid email or password" });
      }
    }
  });
});
module.exports = router;
