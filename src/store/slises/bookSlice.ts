/* eslint-disable no-console */
import { createSlice } from '@reduxjs/toolkit';

import bookThunk from '../thunks/bookThunk';

import type { BookType } from '../../types';

const getInitialStore = () => ({
  books: [] as BookType[],
  counter: 0,
  numberPerPage: 0,
});

const bookSlice = createSlice({
  name: 'books',
  initialState: getInitialStore,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(bookThunk.getAllFiltredBooks.fulfilled, (store, { payload }) => {
        store.books = payload;
        // store.counter = payload.counter;
        // store.numberPerPage = payload.numberPerPage;
      });
  },
});

export const bookSliceActions = bookSlice.actions;

export default bookSlice.reducer;
