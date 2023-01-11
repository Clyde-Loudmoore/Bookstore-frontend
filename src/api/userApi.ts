import axiosInstance from './api';

import type { UserType } from '../types';

const USER_PATH = '/user';

export const patchUser = (userId: number, data: { fullName: string; email: string }) => {
  return axiosInstance.patch<{ updatedUser: UserType }>(`${USER_PATH}/${userId}`, data);
};

export const patchUserPass = (userId: number, data: { password: string }) => {
  return axiosInstance.patch<{ updatedUser: UserType }>(`${USER_PATH}/${userId}/password`, data);
};
