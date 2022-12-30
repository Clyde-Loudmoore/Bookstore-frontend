import axios from 'axios';
import Cookies from 'js-cookie';

const BASE_URL = 'http://localhost:4000/api';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use((request) => {
  const token = Cookies.get('token');
  if (token) {
    // eslint-disable-next-line no-param-reassign
    request.headers = {
      ...request.headers,
      authorization: `Bearer ${token}`,
    };
  }
  return request;
});

export default axiosInstance;
