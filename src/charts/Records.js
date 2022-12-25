import React from 'react'

const Records = ({ recordData }) => {
  if (recordData.length !== 2) {

    return <>no data</>
  }

  const parseEventData = (eventData) => {
    const start = eventData[0].timestamp;
    const end = eventData[eventData.length - 1].timestamp;


    const duration = new Date(Date.parse(end)) - new Date(Date.parse(start));

    return Math.floor(duration / 1000) + " seconds"
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
