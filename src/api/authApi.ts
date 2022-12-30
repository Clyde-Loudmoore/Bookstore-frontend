import axiosInstance from './api';

import type { UserType } from '../types';

const AUTH_PATH = '/auth';

export const singIn = (data: { email: string; password: string }) => {
  return axiosInstance.post<{ user: UserType; token: string }>(`${AUTH_PATH}/sing-in`, data);
};

export const singUp = (data: { email: string; password: string }) => {
  return axiosInstance.post<{ user: UserType; token: string }>(`${AUTH_PATH}/sing-up`, data);
};
