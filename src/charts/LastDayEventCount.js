import React from 'react'

const LastDayEventCount = ({lastDayEventCount}) => {
  console.log(lastDayEventCount);

  return (<h1>
    <center>
    {lastDayEventCount} visits in the past 24 hours
    </center>
  </h1>)
}

export default LastDayEventCount;
