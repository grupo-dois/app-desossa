import axios, { AxiosError } from 'axios';
import { logout } from './services/login';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000,
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (config) => {
    return config;
  },
  (error: AxiosError | Error) => {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      logout()
      window.location.href = '/'
    }

    return Promise.reject(error);
  }
);

export default instance;
