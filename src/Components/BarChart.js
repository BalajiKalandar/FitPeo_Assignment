import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const BarChart1 = () => {
  const data = [
    { month: 'Jan', earnings: 1000 },
    { month: 'Feb', earnings: 1500 },
    { month: 'Mar', earnings: 1200 },
    { month: 'Apr', earnings: 1800 },
    { month: 'May', earnings: 2000 },
    { month: 'Jun', earnings: 2500 },
    { month: 'Jul', earnings: 2200 },
    { month: 'Aug', earnings: 2800 },
    { month: 'Sep', earnings: 3000 },
    { month: 'Oct', earnings: 3500 },
    { month: 'Nov', earnings: 3200 },
    { month: 'Dec', earnings: 3800 },
  ];

  return (
    <BarChart width={500} height={200} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="earnings" fill="#8884d8" />
    </BarChart>
  );
};

export default BarChart1;
