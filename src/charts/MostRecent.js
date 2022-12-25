import React from 'react'

import { format } from '../service/util'


const MostRecent = ({ mostRecent }) => {

  console.log("mostRecent:" + JSON.stringify(mostRecent))
  if (!mostRecent) {
    return <> no data</>;
  }
  return (
    <center>
      <h1>
        Last event {format(Date.now() - Date.parse(mostRecent.timestamp))} ago
      </h1>
    </center>
  )


}

export default MostRecent
