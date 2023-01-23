import { createAsyncThunk } from '@reduxjs/toolkit';

import authApi from 'api/authApi';

const registration = createAsyncThunk('registration', async (data: { email: string; password: string }) => {
  const res = await authApi.singUp(data);
  return res.data.user;
});

const authorization = createAsyncThunk('authorization', async (data: { email: string; password: string }) => {
  const res = await authApi.singIn(data);
  // token.set(res.data.token)
  return res.data.user;
});

export default {
  registration,
  authorization,
};
