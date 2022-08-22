import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' 
    },
    title: {
      display: true,
      text: 'Program Attendance Analytics',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Data",
      data: [13, 33, 55, 67, 88, 12, 98, 12],
      borderColor: "#6DBAEE",
      backgroundColor: "#C1E0F5",
    },
  ],
};


const ProgramChart = () => {
  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
}

export default ProgramChart