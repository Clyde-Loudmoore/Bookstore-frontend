/* eslint-disable no-console */
import api from 'src/api/api';

import type { UserType } from 'src/types';

const USER_PATH = '/user';

const addAvatar = (avatar: string) => {
  return api.axiosInstance.post<{ updatedUser: UserType }>(`${USER_PATH}/avatar`, { avatar });
};

const editUser = (userId: number, data: { fullName: string; email: string }) => {
  return api.axiosInstance.patch<{ updatedUser: UserType }>(`${USER_PATH}/${userId}`, data);
};

const editUserPass = (userId: number, data: { password: string }) => {
  return api.axiosInstance.patch(`${USER_PATH}/${userId}/password`, data);
};

export default {
  addAvatar,
  editUser,
  editUserPass,
};
