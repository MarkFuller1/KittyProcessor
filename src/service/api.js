import axios from 'axios'

const backendURL = "http://192.168.1.5:8080"

export const getData = (setTimestamps) => {
  axios.get(backendURL + "/lastWeek")
    .then(response => {
      return response.data;
    })
    .then(data => setTimestamps(data))
    .catch(error => console.log(error));
}

export const getPieChartData = (lastNDays, setPieChartData) => {
  axios.get(backendURL + "/pie?nDays=" + lastNDays)
    .then(response => {
      return response.data
    })
    .then(data => setPieChartData(data))
    .catch(error => console.log(error));
}

export const getBarChartData = (lastNDays, setBarChartData) => {
  const path = backendURL + "/lastWeek/bar?nDays=" + lastNDays
  console.log("getting bar chart:" + path)
  axios.get(path)
    .then(response => {
      return response.data
    })
    .then(data => setBarChartData(data))
    .catch(error => console.log(error));
}

export const getLineChartData = (lastNDays, setLineChartData) => {
  axios.get(backendURL + "/line?nDays=" + lastNDays)
    .then(response => {
      return response.data
    })
    .then(data => setLineChartData(data))
    .catch(error => console.log(error));
}

export const getRecords = (setRecords) => {
  const path = backendURL + "/records";
  console.log("getting records:" + path)
  axios.get(path)
    .then(response => {
      return response.data
    })
    .then(data => setRecords(data))
    .catch(error => console.log(error));
}


export const mostRecent = (setMostRecent) => {
  const path = backendURL + "/mostRecent";
  console.log("getting most recent:" + path)
  axios.get(path)
    .then(response => {
      return response.data
    })
    .then(data => setMostRecent(data))
    .catch(error => console.log(error));
}
export const lastDayEventCount = (setLastDayEventCount) => {
  const path = backendURL + "/lastDayEventCount";
  console.log("getting last day event count:" + path)
  axios.get(path)
    .then(response => {
      return response.data
    })
    .then(data => setLastDayEventCount(data))
    .catch(error => console.log(error));
}
