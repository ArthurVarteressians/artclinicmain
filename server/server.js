const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
const bcrypt = require("bcrypt");
const util = require("util");
const jwt = require("jsonwebtoken");
const { verify } = require("crypto");
const moment = require("moment");
const saltRounds = 10;
app.use(cors());
app.use(express.json());
const axios = require("axios");
const db = require("./database");

const PORT = 3001;
//===========================Clinic DB===================================
const SECRET = "1I1d6WhwZWjGn4ijZDpBaGq";
const query = util.promisify(db.query).bind(db);
// =================================Singup Request===============================
const clientSignup = require("./routes/clientSignupServerFile");
app.use("/Profile", clientSignup);
// =================================Login Request===============================
const clientLogin = require("./routes/clientLoginServerFile");
app.use("/ClientsLogins", clientLogin);
// =================================Manager Logic===============================
const managerLoginRouter = require("./routes/managerLoginServerFile");
app.use("/ManagerLoginmmm", managerLoginRouter);
//=================================Manager Call Requests Show===============================
const managerConsultingReq = require("./routes/managerConsultingReqServerFile");
app.use("/ConsultingReq", managerConsultingReq);
// =================================Client Call Req ===============================
const clientSubmitCall = require("./routes/clientCallReqSubmitingServerFile");
app.use("/SubmitQ", clientSubmitCall);
// =================================Doctors Appointment List Check===============================
const doctorAppointmentList = require("./routes/doctorLoginAppointmentList");
app.use("/api/doctors/openAppointments", doctorAppointmentList);
// =================================Doctors Login Toast===============================
const doctorLoginToast = require("./routes/doctorLoginToast");
app.use("/getDoctorName", doctorLoginToast);
// =================================Manager Get All Client Lists===============================
const managerGetClientsLists = require("./routes/managerGetClientsLists");
app.use("/GetClientsLists", managerGetClientsLists);
//==================================Manager Get NEW Client List========================
const managerGetNewClientsLists = require("./routes/managerGetNewClientsLists");
app.use("/GetNewClientsLists", managerGetNewClientsLists);
//==================================Manager New Month Chart Client Count============
const managerClientChart = require("./routes/managerClientChart");
app.use("/GetNewClientsChartList", managerClientChart);
//===================================Manager Delete Client=================================
const managerDeleteClient = require("./routes/managerDeleteClient");
app.use("/GetClientsLists", managerDeleteClient);
//===================================Manager Call Requests Delete=================================
const managerDeleteCallRequests = require("./routes/managerDeleteCallRequests");
app.use("/ConsultingReq", managerDeleteCallRequests);
//==================================Department Change Handler=================================
const departmentChange = require("./routes/departmentChange");
app.use("/doctors", departmentChange);
//===============================Manager Report New Patient Counts==============================
const appointmentCountsRouter = require("./routes/appointmentCounts");
app.use("/appointmentCounts", appointmentCountsRouter);
//===============================Manager Report Doctor List ==============================
const doctorsRouter = require("./routes/managerDoctorsList");
app.use("/getDoctorsList", doctorsRouter);
//===============================Manager Report Doctor Appointment Counts==============================
const appointmentsRouter = require("./routes/managerAppointmentReport");
app.use("/appointmentss", appointmentsRouter);
//===============================================Check Available Time For Scheduling==============================
const availabilityRouter = require("./routes/availability");
app.use("/checkAvailability", availabilityRouter);
//===============================================Update Patient Status In Doctors Sections==============================
const statusUpdateDoc = require("./routes/updateStatusInDoctorSection");
app.use("/api/appointments", statusUpdateDoc);
//===============================================Doctor Dashbord Appointments Info==============================
const doctorsDashbordAppointment = require("./routes/doctorsDashbordAppointment");
app.use("/api/doctors", doctorsDashbordAppointment);
//===============

//=======================================================Clinet Part===============================================
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(403).send("Access denied");
  }
  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) {
      console.error("Error verifying JWT token:", err);
      return res.status(500).send("Server error");
    }
    req.patient_id = decoded.id;
    next();
  });
};
//==================================================Scheduling part

app.post("/Sched", verifyToken, async (req, res) => {
  const doctorId = req.body.doctorId;
  const date = req.body.date;
  const time = req.body.time;
  const dateTimeString = date + " " + time;
  const appointmentNumber = 0;
  const registrationDate = new Date();
  const updateDate = new Date();
  const appointment_status = 0;
  const patientId = req.patient_id;

  try {
    const availabilityResponse = await axios.post(
      "http://localhost:3001/checkAvailability",
      {
        doctorId,
        date,
        time,
      }
    );

    if (availabilityResponse.status === 200) {
      const getCurrentAppointmentNumberQuery =
        "SELECT MAX(appointmentnumber) as maxAppointmentNumber FROM appointments";
      db.query(getCurrentAppointmentNumberQuery, (error, results) => {
        if (error) {
          console.error(error);
          res.status(500).json({ error: "Failed to store appointment" });
        } else {
          const currentAppointmentNumber = results[0].maxAppointmentNumber || 0;
          const newAppointmentNumber = currentAppointmentNumber + 1;
          const appointmentDate = moment(
            dateTimeString,
            "YYYY-MM-DD HH:mm:ss"
          ).format("YYYY-MM-DD HH:mm:ss");
          const query = `INSERT INTO appointments (appointmentnumber, doctor_id, patient_id, appointment_date, registeration_date, update_date, appointment_status) VALUES (?, ?, ?, ?, ?, ?, ?)`;
          db.query(
            query,
            [
              newAppointmentNumber,
              doctorId,
              patientId,
              appointmentDate,
              registrationDate,
              updateDate,
              appointment_status,
            ],
            (error, results) => {
              if (error) {
                console.error(error);
                res.status(500).json({ error: "Failed to store appointment" });
              } else {
                const appointmentId = results.insertId;
                res.status(201).json({
                  id: appointmentId,
                  message: "Appointment booked successfully",
                });
              }
            }
          );
        }
      });
    } else {
      res.status(409).json({ error: "The selected time is not available" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to check appointment availability" });
  }
});

//==================================================Patient Dashbord Info showing

app.get("/patientInformation", verifyToken, (req, res) => {
  const patient_id = req.patient_id;
  const query = `
    SELECT id, name, phoneNumber, email
    FROM patientslist
    WHERE id = ?;
  `;
  db.query(query, [patient_id], (error, results) => {
    if (error) {
      console.error(error);
      res.sendStatus(500);
    } else {
      if (results && results.length > 0) {
        const patientInfo = {
          id: results[0].id,
          name: results[0].name,
          phoneNumber: results[0].phoneNumber,
          email: results[0].email,
        };
        res.send(patientInfo);
      } else {
        res.sendStatus(404);
      }
    }
  });
});

////==================================================Patient Dashbord Appointment Requesting Logic
app.get("/checkOpenAppointment", verifyToken, (req, res) => {
  const { authorization } = req.headers;

  // Check if the authorization token is present
  if (!authorization) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const patientId = req.patient_id;
  console.log(patientId);
  const query =
    "SELECT * FROM appointments WHERE patient_id = ? AND appointment_status = 0";
  db.query(query, [patientId], (error, results) => {
    if (error) {
      console.error("Error checking open appointment:", error);
      return res.status(500).json({ error: "Internal server error" });
    }

    if (results.length > 0) {
      return res.json({ hasOpenAppointment: true });
    }

    return res.json({ hasOpenAppointment: false });
  });
});
////==================================================Patient Dashbord Appointment History

app.get("/PatientAppointmentHistory", verifyToken, (req, res) => {
  const patientId = req.patient_id;
  // Retrieve appointment history for the patient
  db.query(
    `SELECT a.appointmentnumber, d.fullname, d.doctor_id, d.department, a.patient_id, a.appointment_date, a.registeration_date, a.update_date, a.appointment_status 
    FROM appointments AS a
    JOIN doctors AS d ON a.doctor_id = d.doctor_id
    WHERE a.patient_id = ?`,
    [patientId],
    (err, result) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
      }
      res.json(result);
    }
  );
});

///===============================PORT======================

app.listen(PORT, () => console.log(`Server is Up on port ${PORT}`));
