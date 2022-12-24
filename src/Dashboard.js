import { Grid, Paper } from "@mui/material";
import React, { useEffect, useState } from "react"
import Bar from "./charts/Bar";
import { numberLine } from "./service/Analyze";

import * as api from './service/api'


const Dashboard = () => {

  // comment
  const [timestamps, setTimestamps] = useState([]);

  const [barChartData, setBarChartData] = useState([]);
  // const [lineChartData, setLineChartData] = useState([]);
  // const [pieChartData, setPieChartData] = useState([]);
  // const [numDays, setNumDays] = useState(7);
  const numDays = 7;


  useEffect(() => {
    console.log("running use effect")
    api.getData(setTimestamps);
    api.getBarChartData(numDays, setBarChartData);
    // api.getLineChartData(numDays, setLineChartData);
    // api.getPieChartData(numDays, setPieChartData);
  }, [])

  useEffect(() => {
    numberLine(timestamps);
  }, [timestamps])

  return (
    <div>
      <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
        <Grid item lg={6}>
          <Paper>
            <center>
              <table>
                <thead>
                  <tr>
                    <th>
                      UUID
                    </th>
                    <th>
                      Time
                    </th>
                  </tr>
                </thead>
                  <tbody>
                {timestamps.map((stamp) => {
                  return (
                    <tr key={stamp.id}>
                      <td>{stamp.id}</td>
                      <td>{stamp.timestamp}</td>
                    </tr>
                  )
                })}
                  </tbody>
              </table>
            </center>
          </Paper>
        </Grid>
        <Grid item lg={12}>
          <Bar barChartData={barChartData} />
        </Grid>
      </Grid>
    </div>
  );

}

export default Dashboard;

