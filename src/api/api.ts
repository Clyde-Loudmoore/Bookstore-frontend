import axios from 'axios';

export const BASE_URL = 'http://localhost:4000/api';

const tokenHelper = { get: () => 'null', set: (a: string) => null };

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
