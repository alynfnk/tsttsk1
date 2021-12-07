import axios from 'axios';

axios.interceptors.request.use(
  config => {
      const token = window?.localStorage?.getItem('token');
      if (token) {
          config.headers['Token'] = token;
      }
      return config;
  },
  error => {
      Promise.reject(error)
  });