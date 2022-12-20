import React, { useEffect, useState } from "react"
import * as api from './api'


const Dashboard = () => {

  const [timestamps, setTimestamps] = useState([]);

  useEffect(() => {
    console.log("running use effect")
    api.getData(setTimestamps);
  }, [])

  useEffect(() => {
    console.log(timestamps)
  }, [timestamps])

  return (
    <div>
    { timestamps.map((stamp, index) => {return <h3>{index} : {stamp.timestamp} </h3>;}) }
    </div>
  );

}

export default Dashboard;

