import axios from 'axios';

const mainApiInstance = axios.create({
  baseURL: 'https://ids-task-manager-api.herokuapp.com/',
});

mainApiInstance.interceptors.request.use(
  config => {
    const auth_token = null;
    config.headers.Authorization = auth_token;
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default mainApiInstance;
