/* eslint-disable no-console */
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import userThunk from 'store/Thunk/userThunk';

import type { UserType } from 'types';

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
  },
  extraReducers: (builder) => {
    builder
      .addCase(userThunk.registration.fulfilled, (store, { payload }) => {
        store.user = payload;
      })
      .addCase(userThunk.authorization.fulfilled, (store, { payload }) => {
        store.user = payload;
      })
      .addCase(userThunk.getMe.fulfilled, (store, { payload }) => {
        if (payload) {
          store.user = payload;
        }
      });
  },
});

export const userSliceActions = userSlice.actions;

export default userSlice.reducer;
