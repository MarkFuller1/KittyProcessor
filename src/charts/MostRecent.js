import React from 'react'

const format = (time) => {

  const seconds = time / 1000;

  if (seconds < 100) {
    return seconds + " seconds ago";
  }

  const mins = seconds / 60;

  if (mins < 60) {
    return mins + " minutes ago"
  }

  const hours = mins / 60;

  return "Last event " + Math.floor(hours) + " hours ago"


}

const MostRecent = ({ mostRecent }) => {

  console.log("mostRecent:" + JSON.stringify(mostRecent))
  if (!mostRecent) {
    return <> no data</>;
  }
  return (
    <center>
      <h1>
        {format(Date.now() - Date.parse(mostRecent.timestamp))}
      </h1>
    </center>
  )


}

export default MostRecent
