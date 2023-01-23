/* eslint-disable no-console */
import { axiosInstance } from './api';

import type { UserType } from '../types';

const USER_PATH = '/user';

const postAvatar = (avatar: string) => {
  return axiosInstance.post<{ updatedUser: UserType }>(`${USER_PATH}/avatar/`, { avatar });
};

const patchUser = (userId: number, data: { fullName: string; email: string }) => {
  return axiosInstance.patch<{ updatedUser: UserType }>(`${USER_PATH}/${userId}`, data);
};

const patchUserPass = (userId: number, data: { password: string }) => {
  return axiosInstance.patch<{ updatedUser: UserType }>(`${USER_PATH}/${userId}/password/`, data);
};

export default {
  postAvatar,
  patchUser,
  patchUserPass,
};
