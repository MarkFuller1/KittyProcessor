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

const round = (num) => {
  return Math.round(num * 10) / 10
}

const DurationBar = ({ barChartData }) => {
  const processedData = barChartData?.barGroup?.map(group => {
    return {
      name: Object.keys(group)[0],
      duration: round(millisToMins(group[Object.keys(group)[0]]))
    }
  })

  processedData?.sort((a,b) => Date.parse(a.name) < Date.parse(b.name) ? -1 : 1)

  return (<>
    <center>
      <BarChart width={730} height={250} data={processedData}>
        <CartesianGrid strokeDasharray={"3 3"} />
        <XAxis dataKey="name" tickFormatter={(data) => {
          return new Date(Date.parse(data)).toLocaleDateString('en-us',
            {
              weekday: 'long',
              month: 'short',
              day: 'numeric'
            }
          )
        }} />
        <YAxis/>
        <Tooltip labelFormatter={(a) => {return new Date(Date.parse(a)).toLocaleTimeString('en-us')} } />
        <Legend />
        <Bar dataKey="duration" fill="#8884d8" />
      </BarChart>
    </center>

  </>);
}

export default DurationBar;
