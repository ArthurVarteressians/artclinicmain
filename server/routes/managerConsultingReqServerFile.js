const express = require("express");
const router = express.Router();
const db = require("../database");

router.get("/", (req, res) => {
  const query =
    "SELECT id,name, phonenumber, email, submission_time  FROM callrequests WHERE status = 0;";
  db.query(query, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to get count of clients" });
    } else {
      const totalClients = result[0].total_clients;
      res.send(result);
    }
  });
});
module.exports = router;
