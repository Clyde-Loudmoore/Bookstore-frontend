import Cookies from 'js-cookie';

import { axiosInstance } from 'src/api/api';

const tokenHelper = {
  get: () => { return Cookies.get('token'); },
  set: (a: string) => Cookies.set('token', a),
  remove: () => { Cookies.remove('token'); },
};

const getAuthHeader = (token = tokenHelper.get()) => `Bearer ${token}`;

const setApiToken = (token: string) => {
  tokenHelper.set(token);
  axiosInstance.defaults.headers.authorization = getAuthHeader(token);
};

const getApiToken = (token: string) => {
  tokenHelper.get();
  axiosInstance.defaults.headers.authorization = getAuthHeader(token);
};

const removeApiToken = (token: string) => {
  tokenHelper.remove();
  axiosInstance.defaults.headers.authorization = getAuthHeader(token);
};

export default {
  tokenHelper,
  getAuthHeader,
  setApiToken,
  getApiToken,
  removeApiToken,
};
