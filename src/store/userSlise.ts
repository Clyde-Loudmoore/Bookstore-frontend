/* eslint-disable no-console */
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { UserType } from '../types';

const getInitialStore = () => ({
  user: null as UserType | null,
});

const userSlice = createSlice({
  name: 'user',
  initialState: getInitialStore,
  reducers: {
    setUser: (store, { payload }: PayloadAction<UserType>) => {
      store.user = payload;
    },
    getMe: (store, { payload }: PayloadAction<UserType>) => {
      store.user = payload;
    },
  },
});

export const { setUser, getMe } = userSlice.actions;

export const userSliceActions = userSlice.actions;

export default userSlice.reducer;
