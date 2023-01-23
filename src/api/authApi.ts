import { axiosInstance } from './api';

import type { UserType } from '../types';

const AUTH_PATH = '/auth';

type AuthResponseType = { user: UserType; token: string };

const singIn = (data: { email: string; password: string }) => {
  return axiosInstance.post<AuthResponseType>(`${AUTH_PATH}/sing-in`, data);
};

const singUp = (data: { email: string; password: string }) => {
  return axiosInstance.post<AuthResponseType>(`${AUTH_PATH}/sing-up`, data);
};

const getUser = () => {
  return axiosInstance.get<{ user: UserType }>(`${AUTH_PATH}/me`);
};

export default {
  singIn,
  singUp,
  getUser,
};
