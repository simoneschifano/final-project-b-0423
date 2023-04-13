import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import moment from "moment";
import { styles } from "css-module";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartEl = () => {
  const prices = [
    [1680825600000, 28042.9833864884],
    [1680912000000, 27934.43871284895],
    [1680998400000, 27968.12804705512],
    [1681084800000, 28351.23699385011],
    [1681171200000, 29657.974136873556],
    [1681257600000, 30260.93610940865],
    [1681344000000, 29904.138694718906],
    [1681394523000, 30233.429135417133],
  ];

  const coinChartData = prices.map((value) => ({
    x: value[0],
    y: value[1].toFixed(2),
  }));
  const data = {
    labels: coinChartData.map((value) => moment(value.x).format("MMM DD")),
    datasets: [
      {
        label: "Dataset 1",
        data: coinChartData.map((val) => val.y),
        borderColor: `${
          prices[0][1] > prices[7][1] ? "rgb(255, 0, 0)" : "rgb(134, 218, 8)"
        }`,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderWidth: 0,
      },
    ],
  };
  return (
    <Line
      className={styles.ChartEl}
      data={data}
      options={{
        responsive: true,
        maintainAspectRatio: true,
      }}
    />
  );
};

export default ChartEl;
