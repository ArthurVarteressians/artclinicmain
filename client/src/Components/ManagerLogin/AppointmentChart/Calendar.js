import React from "react";
import AppointmentCountsChart from "./AppointmentCountsChart";
import MonthlyClientCountsChart from "../Getinfopage/Chart/ManagerChart";
import DoctorAppointments from "../Getinfopage/CheckDocotrosAppointments/DoctorAppointments ";

function Calendar() {
  return (
    <>
      <MonthlyClientCountsChart />
      <hr />
      <AppointmentCountsChart />
      <hr />
      <DoctorAppointments />
    </>
  );
}

export default Calendar;
