import axios from 'axios'
const baseUrl = process.env.REACT_APP_BASE_URL + 'viewer/analyzer/'

const get = (unit, from, to) => {
  const request = axios.get(baseUrl + 'get?unit=' + unit + '&from=' + from + '&to=' + to)
  return request.then(response => response.data).catch((err) => {
    console.error(err);
  });
}

const get_daily_data = (unit, year, month, date) => {
  const request = axios.get(baseUrl + 'get_daily_data?unit=' + unit + '&year=' + year + '&month=' + month + '&date=' + date)
  return request.then(response => response.data).catch((err) => {
    console.error(err);
  });
}

export default { get, get_daily_data }