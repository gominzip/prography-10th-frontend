import axios from 'axios';

const fetchClient = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default fetchClient;
