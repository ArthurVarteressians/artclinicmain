import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import Axios from "axios";
import "./Chart.css";
import End_point from "../../../../Baseurl";

const MonthlyClientCountsChart = () => {
  const chartRef = useRef(null);
  const [clientCounts, setClientCounts] = useState([]);
  const [showChart, setShowChart] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(
          `${End_point}/GetNewClientsChartList`
        );
        setClientCounts(response.data);
        setShowChart(true);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (showChart && chartRef.current) {
      const chart = new Chart(chartRef.current, {
        type: "bar",
        data: {
          labels: Array.from({ length: clientCounts.length }, (_, i) => i + 1),
          datasets: [
            {
              label: "Registered Counts",
              data: clientCounts,
              backgroundColor: "rgba(75, 192, 192, 0.4)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              type: "linear",
              beginAtZero: true,
              max: Math.max(...clientCounts) + 2,
            },
          },
        },
      });

      return () => {
        chart.destroy();
      };
    }
  }, [clientCounts, showChart]);

  return (
    <div className="ChartSectionss">
      <h2> Current Month New Client Counts</h2>
      <div style={{ height: "500px" }}>
        {showChart && <canvas ref={chartRef} />}
      </div>
      {showChart && (
        <div className="NewRegCountText">
          <p>
            Total New Clients:{" "}
            <span style={{ fontWeight: "bold" }}>
              {clientCounts.reduce((acc, curr) => acc + curr, 0)}
            </span>
          </p>
          <p>
            Max Registered Clients in a Day:{" "}
            <span style={{ fontWeight: "bold" }}>
              {Math.max(...clientCounts)}
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default MonthlyClientCountsChart;
