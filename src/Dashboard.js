import { Grid, Paper } from "@mui/material";
import React, { useEffect, useState } from "react"
import { numberLine } from "./service/Analyze";

import * as api from './service/api'


const Dashboard = () => {
  
  // comment
  const [timestamps, setTimestamps] = useState([]);

  const [lineChartData, setLineChartData] = useState([]);
  const [barChartData, setBarChartData] = useState([]);
  const [pieChartData, setPieChartData] = useState([]);
  const [numDays, setNumDays] = useState(7);


  useEffect(() => {
    console.log("running use effect")
    api.getData(setTimestamps);
    api.getBarChartData(numDays,setBarChartData);
    api.getLineChartData(numDays,setLineChartData);
    api.getPieChartData(numDays,setPieChartData);
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
                <tr>
                  <th>
                    UUID
                  </th>
                  <th>
                    Time
                  </th>
                </tr>
                {timestamps.map((stamp) => {
                  return (
                    <tr>
                      <td>{stamp.id}</td>
                      <td>{stamp.timestamp}</td>
                    </tr>
                  )
                })}
              </table>
            </center>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );

}

export default Dashboard;

