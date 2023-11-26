const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const db = require("../database");
const bcrypt = require("bcrypt");
const util = require("util");

const SECRET = "1I1d6WhwZWjGn4ijZDpBaGq";
const query = util.promisify(db.query).bind(db);

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const results = await query("SELECT * FROM patientslist WHERE email = ?", [
      email,
    ]);

    if (results.length === 0) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
    }
    console.log("Database results:", results);

    const hashedPassword = results[0].hashedpassword;
    console.log("Hashed password from database:", hashedPassword);

    if (await bcrypt.compare(password, hashedPassword)) {
      const token = jwt.sign({ id: results[0].id }, SECRET, {
        expiresIn: "10m",
      });

      console.log(`Token generated successfully: ${token}`);

      const patientId = results[0].id;
      return res.status(200).header("Authorization", token).json({
        success: true,
        token: token,
        email: email,
        patient_id: patientId,
      });
    } else {
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).send("Server error");
  }
});

module.exports = router;
