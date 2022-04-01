import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
//import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: 'Covid Situation',
      font: {
        size: 16
    }
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

export const CountryChart = (props) => {
    const labels = props.stats.map(label => label.Date);

    const data = {
    labels,
    datasets: [
        {
        label: 'Active',
        data: props.stats.map(label => label.Confirmed),
        backgroundColor: 'rgb(255, 99, 132)',
        },
        {
        label: 'Recovered',
        data: props.stats.map(label => label.Recovered),
        backgroundColor: 'rgb(75, 192, 192)',
        },
        {
        label: 'Deceased',
        data: props.stats.map(label => label.Deaths),
        backgroundColor: 'rgb(53, 162, 235)',
        },
    ],
    };

    return (
        <Bar options={options} data={data} />
    )
}
