/* eslint-disable no-console */
import axios from 'axios';
import Cookies from 'js-cookie';
import _random from 'lodash/random';

export const BASE_URL = 'http://localhost:4000/api';

const tokenHelper = {
  get: () => { return Cookies.get('token'); },
  set: (a: string) => Cookies.set('token', a),
};

const getAuthHeader = (token = tokenHelper.get()) => `Bearer ${token}`;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    authorization: getAuthHeader(),
  },
});

export const setApiToken = (token: string) => {
  tokenHelper.set(token);
  axiosInstance.defaults.headers.authorization = getAuthHeader(token);
};

axiosInstance.interceptors.request.use(async (request) => {
  await new Promise((res) => {
    setTimeout(() => {
      res(true);
    }, _random(300, 500));
  });
  return request;
});
