const express = require("express");
const router = express.Router();
const db = require("../database");

router.get("/", async (req, res) => {
  const { email, phonenumber } = req.query;

  // Check if the email or phone number already exists
  const checkQuery =
    "SELECT COUNT(*) AS count FROM callrequests WHERE email = ? OR phonenumber = ?";
  db.query(checkQuery, [email, phonenumber], (checkError, checkResults) => {
    if (checkError) {
      console.error(checkError);
      res.status(500).send("Error checking data");
    } else {
      const count = checkResults[0].count;
      if (count > 0) {
        res.status(200).send("Duplicate email or phone number");
      } else {
        res.status(200).send("No duplicate entries");
      }
      
      }
    
  });
});

router.post("/", async (req, res) => {
  try {
    const { name, email, phonenumber } = req.body;
    const currentTime = new Date();

    // Check if the email or phone number already exists
    const checkQuery =
      "SELECT COUNT(*) AS count FROM callrequests WHERE email = ? OR phonenumber = ?";
    const [checkResults] = await db
      .promise()
      .query(checkQuery, [email, phonenumber]);
    const count = checkResults[0].count;

    if (count > 0) {
       res.status(400).json({ message: "Email already exists" });
    } else {
      // Insert the data into the callrequests table
      const insertQuery =
        "INSERT INTO callrequests (name, email, phonenumber, status, submission_time) VALUES (?, ?, ?, 0, ?)";
      await db
        .promise()
        .query(insertQuery, [name, email, phonenumber, currentTime]);
      res
        .status(200)
        .send(
          "Your call request submitted successfully. We will call you as soon as possible. Thanks."
        );
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error adding data");
  }
});

module.exports = router;
