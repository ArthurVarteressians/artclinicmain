import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import Axios from "axios";
import "./AppointmentChart.css"
import End_point from "../../../Baseurl";
const MonthlyClientCountsChart = () => {
  const pieChartRef = useRef(null);
  const barChartRef = useRef(null);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(
          `${End_point}/appointmentCounts`
        );
        const data = response.data;

        const labels = data.map(
          (item) => `${item.departmentName} - ${item.doctorName}`
        );
        const counts = data.map((item) => item.count);

        const backgroundColors = data.map((_, index) =>
          getBackgroundColor(index)
        );

        setChartData({
          labels,
          datasets: [
            {
              label: "Appointment Counts",
              data: counts,
              backgroundColor: backgroundColors,
              borderColor: "gray",
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (chartData && pieChartRef.current && barChartRef.current) {
      const pieChart = new Chart(pieChartRef.current, {
        type: "pie",
        data: chartData,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          backgroundColor: "rgba(0, 0, 0, 0.1)",
        },
      });
      const barChart = new Chart(barChartRef.current, {
        type: "bar",
        data: chartData,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              max: Math.max(...chartData.datasets[0].data) + 1,
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
          barThickness: 40,
        },
      });

      return () => {
        pieChart.destroy();
        barChart.destroy();
      };
    }
  }, [chartData]);

  const getBackgroundColor = (index) => {
    const colors = [
      "rgba(95, 142, 172, 0.6)",
      "rgba(255, 99, 132, 0.6)",
      "rgba(54, 162, 235, 0.6)",
      "rgba(255, 206, 86, 0.6)",
      "rgba(13, 172, 25, 0.6)",
      "rgba(143, 112, 200, 0.6)",
    ];

    return colors[index % colors.length];
  };

  return (
    <div className="ChartSectionssForApp">
      <div className="chartContainerForApp">
        <h2>Monthly Appointment Counts</h2>
        <div className="chartWrapper">
          <canvas ref={pieChartRef} />
        </div>
      </div>
      <div className="chartContainerForApp">
      <div class="verticalLine">
        <h2>Monthly Appointment Counts</h2>
        <div className="chartWrapperForApp">
          <canvas ref={barChartRef} />    </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyClientCountsChart;
