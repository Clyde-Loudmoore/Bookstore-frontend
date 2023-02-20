import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import { createLogger } from 'redux-logger';

import { isDev } from 'src/config';
import userReduser from 'src/store/slises/userSlise';
import bookReduser from 'src/store/slises/bookSlice';

const logger = createLogger({
  collapsed: true,
  predicate: (getState, action) => action.type.includes('book'),
});

const store = configureStore({
  reducer: {
    user: userReduser,
    books: bookReduser,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: isDev,
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatchType>();
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;

export default store;
