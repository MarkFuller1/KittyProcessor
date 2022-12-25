import React from 'react'
import {format} from '../service/util'

const Records = ({ recordData }) => {
  if (recordData.length !== 2) {

    return <>no data</>
  }

  const parseEventData = (eventData) => {
    const start = eventData[0].timestamp;
    const end = eventData[eventData.length - 1].timestamp;


    const duration = new Date(Date.parse(end)) - new Date(Date.parse(start));

    return format(duration);

  }

  const shortestEventData = parseEventData(recordData[0]);
  const longestEventData = parseEventData(recordData[1]);

  return (<>
    <center>
    <h1>
      Shortest: {shortestEventData}
    </h1>
    <h1>
      Longest: {longestEventData}
    </h1>
    </center>
  </>)
}

export default Records;
