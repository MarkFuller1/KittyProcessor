import React from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';

const millisToMins = (ms) => {
  var d, h, m, s;

  s = Math.floor(ms / 1000);
  m = Math.floor(s / 60);
  s = s % 60;
  h = Math.floor(m / 60);
  m = m % 60;
  d = Math.floor(h / 24);
  h = h % 24;
  h += d * 24;

  return m + (s / 60.0);
}

const DurationBar = ({ barChartData }) => {

  const processedData = barChartData?.barGroup?.map(group => {
    return { name: Object.keys(group)[0], duration: millisToMins(group[Object.keys(group)[0]]) }
  })

  return (<>
    <center>
    <BarChart width={730} height={250} data={processedData}>
      <CartesianGrid strokeDasharray={"3 3"} />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="duration" fill="#8884d8" />
    </BarChart>
    </center>

  </>);
}

export default DurationBar;
