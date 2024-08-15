import React, { useEffect } from "react";
import "./pie.scss";

function Pie() {
// Initialization -------------------------------------------------------
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/chart.js";
    script.async = true;

    script.onload = () => {
      const ctx = document.getElementById("myChart").getContext("2d");
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Group1", "Group2", "Group3", "Group4", "Group5", "Group6"],
          datasets: [
            {
              label: "collaboration %",
              data: [50, 100, 75, 20, 33, 63],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // View -----------------------------------------------------------------
  return (
    <div>
      <h1>Graphs</h1>
      <div className="chart">
        <canvas id="myChart"></canvas>
      </div>
    </div>
  );
}

export default Pie;