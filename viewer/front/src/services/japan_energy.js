import axios from 'axios'
const baseUrl = 'http://127.0.0.1:8000/viewer/analyzer/'

const get = () => {
  const request = axios.get(baseUrl + 'get')
  return request.then(response => response.data)
}

export default { get }