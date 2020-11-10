import axios from 'axios'

const request = axios.create({
    baseURL: process.env.VUE_APP_SERVICE,
    timeout: 10000,
  });

export default request