/* eslint-disable no-console */
import { axiosInstance } from 'src/api/api';

import type { UserType } from 'src/types';

const USER_PATH = '/user';

const addAvatar = (avatar: string) => {
  return axiosInstance.post<{ updatedUser: UserType }>(`${USER_PATH}/avatar`, { avatar });
};

const editUser = (userId: number, data: { fullName: string; email: string }) => {
  return axiosInstance.patch<{ updatedUser: UserType }>(`${USER_PATH}/${userId}`, data);
};

const editUserPass = (userId: number, data: { password: string }) => {
  return axiosInstance.patch(`${USER_PATH}/${userId}/password`, data);
};

export default {
  addAvatar,
  editUser,
  editUserPass,
};
