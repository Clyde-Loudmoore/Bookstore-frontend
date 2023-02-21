/* eslint-disable no-console */
import axios from 'axios';
import _random from 'lodash/random';

import tokenHelper from 'src/utils/tokenHelper';

const BASE_URL = 'http://localhost:4000/api';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    authorization: tokenHelper.getAuthHeader(),
  },
});

axiosInstance.interceptors.request.use(async (request) => {
  await new Promise((res) => {
    setTimeout(() => {
      res(true);
    }, _random(300, 500));
  });
  return request;
});
