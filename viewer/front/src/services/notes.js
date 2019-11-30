import axios from 'axios'
const baseUrl = 'http://127.0.0.1:8000/viewer/analyzer/'

const getAll = () => {
  const request = axios.get(baseUrl + 'solar')
  return request.then(response => response.data)
}

export default { getAll }