import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react"
import Bar from "./charts/Bar";
import Records from "./charts/Records";
import MostRecent from "./charts/MostRecent"
import LastDayEventCount from "./charts/LastDayEventCount"

import { numberLine } from "./service/Analyze";

import * as api from './service/api'

const Dashboard = () => {

  // comment
  const [timestamps, setTimestamps] = useState([]);

  const [barChartData, setBarChartData] = useState([]);
  const [recordData, setRecordData] = useState([]);
  const [mostRecent, setMostRecent] = useState();
  const [lastDayEventCount, setLastDayEventCount] = useState(0);
  // const [lineChartData, setLineChartData] = useState([]);
  // const [pieChartData, setPieChartData] = useState([]);
  // const [numDays, setNumDays] = useState(7);
  const numDays = 7;


  useEffect(() => {
    console.log("running use effect")
    api.getData(setTimestamps);
    api.getBarChartData(numDays, setBarChartData);
    api.getRecords(setRecordData);
    api.mostRecent(setMostRecent);
    api.lastDayEventCount(setLastDayEventCount);
    // api.getLineChartData(numDays, setLineChartData);
    // api.getPieChartData(numDays, setPieChartData);
  }, [])

  useEffect(() => {
    numberLine(timestamps);
  }, [timestamps])

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Grid container direction="row" justifyContent="center" alignItems="center" style={{ width: "100vw", height: "100vh" }}>
        <Grid item xs={12} lg={6} >
          {/* </Grid> */}
          <Records recordData={recordData} />
        </Grid>
        <Grid item xs={12} lg={6}>
          <MostRecent mostRecent={mostRecent} />
        </Grid>
        <Grid item xs={12} lg={6}>
          <LastDayEventCount lastDayEventCount={lastDayEventCount} />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Bar barChartData={barChartData} />
        </Grid>
      </Grid>
    </div>
  );

}

export default Dashboard;

