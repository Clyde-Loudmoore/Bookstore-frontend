/* eslint-disable no-console */
import { createSlice } from '@reduxjs/toolkit';

import cartThunk from 'store/thunks/cartThunk';
import bookThunk from 'store/thunks/bookThunk';

import type { BookType, CartType, LikedBookType, FilterQueryType } from '../../types';

const getInitialStore = () => ({
  books: [] as BookType[],
  book: {} as BookType,
  cart: [] as CartType[] | null,
  likedBooks: [] as LikedBookType[],
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
      })
      .addCase(cartThunk.getCart.fulfilled, (state, { payload }) => {
        state.cart = payload.books;
      })
      .addCase(cartThunk.deleteBookInCart.fulfilled, (state, { payload }) => {
        state.cart = payload.books;
      })
      .addCase(cartThunk.addCopyBook.fulfilled, (state, { payload }) => {
        state.cart = payload.books;
      })
      .addCase(cartThunk.deleteCopyBook.fulfilled, (state, { payload }) => {
        state.cart = payload.books;
      })
      .addCase(cartThunk.addBookThunk.fulfilled, (state, { payload }) => {
        state.cart = payload.books;
      });
  },
});

export const bookSliceActions = bookSlice.actions;

export default bookSlice.reducer;
