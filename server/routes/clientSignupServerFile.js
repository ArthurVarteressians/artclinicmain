const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const db = require("../database");
const moment = require("moment");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const util = require("util");


const SECRET = "1I1d6WhwZWjGn4ijZDpBaGq";
const query = util.promisify(db.query).bind(db);

router.post("/", async (req, res) => {
    const { name, email, age, phonenumber, password, registrationDate } =
      req.body;
    if (password) {
      try {
        const registrationDate = moment(
          req.body.registrationDate,
          "MM/DD/YYYY"
        ).format("YYYY-MM-DD");
  
        // Check if email or phone number already exist in the database
        db.query(
          "SELECT COUNT(*) as emailCount, COUNT(*) as phoneNumberCount FROM patientslist WHERE email = ? OR phonenumber = ?",
          [email, phonenumber],
          async (err, result) => {
            if (err) {
              console.error(err);
              return res.status(500).send("Internal server error");
            } else {
              // Check if the email or phone number exists
              const emailCount = result[0].emailCount;
              const phoneNumberCount = result[0].phoneNumberCount;
              if (emailCount > 0) {
                return res.status(400).json({ message: "Email already exists" });
              } else if (phoneNumberCount > 0) {
                return res
                  .status(400)
                  .json({ message: "Phone number already exists" });
              } else {
                const hashedPassword = await bcrypt.hash(password, saltRounds);
                await query(
                  "INSERT INTO patientslist (name, email, age, phonenumber, hashedpassword, registration_date, patient_status) VALUES (?, ?, ?, ?, ? , ?, 0)",
                  [
                    name,
                    email,
                    age,
                    phonenumber,
                    hashedPassword,
                    registrationDate,
                  ]
                );
                db.query(
                  `SELECT * FROM patientslist WHERE email = ?`,
                  [email],
                  (error, results) => {
                    if (error) {
                      console.error("Error executing query:", error);
                      reject(error);
                    }
                    const token = jwt.sign({ id: results[0].id }, SECRET, {
                      expiresIn: "10m",
                    });
                    return res
                      .status(200)
                      .header("Authorization", token) 
                      .json({
                        message: "New patient added",
                        token: token, 
                      });
                  }
                );
              }
            }
          }
        );
      } catch (err) {
        console.error("Error inserting new patient: ", err);
        return res.status(500).send("Internal server error");
      }
    } else {
      console.error("Passwords do not match");
      return res.status(400).send("Passwords do not match");
    }
  });

  module.exports = router;
