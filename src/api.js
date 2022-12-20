import axios from 'axios'

export const getData = (setTimestamps) => {
  return axios.get("http://192.168.1.5:8080/lastWeek")
    .then(response => {
      return response.data;
    })
    .then(data => setTimestamps(data));
}



