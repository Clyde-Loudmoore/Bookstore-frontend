/* eslint-disable no-console */
import { createAsyncThunk } from '@reduxjs/toolkit';

import authApi from 'api/authApi';

const registration = createAsyncThunk('registration', async (data: { email: string; password: string }) => {
  const res = await authApi.singUp(data);
  return res.data.user;
});

const authorization = createAsyncThunk('authorization', async (data: { email: string; password: string }) => {
  const res = await authApi.singIn(data);
  return res.data.user;
});

const getMe = createAsyncThunk('getMe', async () => {
  try {
    const res = await authApi.getUser();
    return res.data.user;
  } catch (err) {
    console.log(err);
  }
});

export default {
  registration,
  authorization,
  getMe,
};
