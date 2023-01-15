import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


export const data = {
  labels: [ //key names
    "Checkings Balance",
    "Savings Balance",],
  datasets: [
    {
      label: "# of votes",
      data: [1, 13],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
      

      ], borderColor: [

        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth:1,   
  },
  ]
}

export function Chart() {
  return <Pie data={data}/>
}