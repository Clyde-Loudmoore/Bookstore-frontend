/* eslint-disable no-console */
import { createSlice } from '@reduxjs/toolkit';

import { getAllBooks } from './bookThunk';

import type { BookType } from '../types';

const getInitialStore = () => ({
  books: [] as BookType[],
});

const bookSlice = createSlice({
  name: 'books',
  initialState: getInitialStore,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBooks.fulfilled, (store, { payload }) => {
        store.books = payload.books;
      });
  },
});

export const bookSliceActions = bookSlice.actions;

export default bookSlice.reducer;
