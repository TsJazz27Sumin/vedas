import axios from 'axios'
const baseUrl = process.env.REACT_APP_BASE_URL + 'viewer/analyzer/'

const get = (unit, from, to) => {
  console.log(baseUrl);
  const request = axios.get(baseUrl + 'get?unit='+ unit + '&from='+ from + '&to='+ to)
  return request.then(response => response.data).catch((err) => {
    console.error(err);
});
}

export default { get }