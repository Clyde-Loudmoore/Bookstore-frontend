/* eslint-disable no-console */
import { createSlice } from '@reduxjs/toolkit';

import bookThunk from '../thunks/bookThunk';

import type { BookType, FilterQueryType } from '../../types';

const getInitialStore = () => ({
  books: [] as BookType[],
  maxPages: 0 as FilterQueryType,
});

const bookSlice = createSlice({
  name: 'books',
  initialState: getInitialStore,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(bookThunk.getAllFiltredBooks.fulfilled, (store, { payload }) => {
        store.books = payload.books;
        store.maxPages = payload.maxPages;
      });
  },
});

export const bookSliceActions = bookSlice.actions;

export default bookSlice.reducer;
