import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

import { isDev } from '../config';
import userReduser from './userSlise';
import bookReduser from './bookSlice';

const store = configureStore({
  reducer: {
    user: userReduser,
    books: bookReduser,
  },
  devTools: isDev,
});

// Add redux logger with collapsed option by default

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatchType>();
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;

export default store;
