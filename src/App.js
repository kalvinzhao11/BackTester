import "./styles.css";
import axios from "axios";
import { useState } from "react";
// 2DXRAFU68A9ESAUB API KEYS

import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
} from "chart.js";

// Chart.register(
//   ArcElement,
//   LineElement,
//   BarElement,
//   PointElement,
//   BarController,
//   BubbleController,
//   DoughnutController,
//   LineController,
//   PieController,
//   PolarAreaController,
//   RadarController,
//   ScatterController,
//   CategoryScale,
//   LinearScale,
//   LogarithmicScale,
//   RadialLinearScale,
//   TimeScale,
//   TimeSeriesScale,
//   Decimation,
//   Filler,
//   Legend,
//   Title,
//   Tooltip,
//   SubTitle
// );

// import Chart from 'chart.js/auto';
// import { getRelativePosition } from 'chart.js/helpers';

// const chart = new Chart(ctx, {
//   type: 'line',
//   data: data,
//   options: {
//     onClick: (e) => {
//       const canvasPosition = getRelativePosition(e, chart);

//       // Substitute the appropriate scale IDs
//       const dataX = chart.scales.x.getValueForPixel(canvasPosition.x);
//       const dataY = chart.scales.y.getValueForPixel(canvasPosition.y);
//     }
//   }
// });

// import { Chart, registerables } from 'chart.js';
// Chart.register(...registerables);

export default function App() {
  var url =
    "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo";

  axios.get(
    {
      url: url,
      json: true,
      headers: { "User-Agent": "request" }
    },
    (err, res, data) => {
      if (err) {
        console.log("Error:", err);
      } else if (res.statusCode !== 200) {
        console.log("Status:", res.statusCode);
      } else {
        // data is successfully parsed as a JSON object:
        console.log(data);
      }
    }
  );

  const [ticker, setTicker] = useState("AAPL");
  axios
    .get(
      `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker}&interval=5min&apikey=demo`
    )
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  console.log("hi");
  var Chart = require("chart.js");
  var ctx = document.getElementById("myChart");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)"
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)"
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  return (
    <div className="App">
      <h1>BackTester</h1>
      <h2>Start editing to see some magic happen!</h2>
      <canvas id="myChart" width="400" height="400"></canvas>
    </div>
  );
}
