/* eslint-disable no-console */
import { createAsyncThunk } from '@reduxjs/toolkit';

import authApi from 'src/api/authApi';

export const getMe = createAsyncThunk('getMe', async () => {
  try {
    const res = await authApi.getUser();
    return res.data.user;
  } catch (err) {
    return null;
  }
});
