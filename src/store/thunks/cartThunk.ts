import { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import cartApi from 'api/cartApi';

import type { AddBookType } from 'types';

const addBookThunk = createAsyncThunk(
  'addBookThunk',
  async (data: AddBookType, { rejectWithValue }) => {
    const { userId, bookId } = data;
    try {
      const cart = await cartApi.addBook(userId, bookId);
      return cart.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        return rejectWithValue(err.response?.data);
      }
      throw err;
    }
  },
);

const getCart = createAsyncThunk(
  'getCart',
  async (userId: number, { rejectWithValue }) => {
    try {
      const cart = await cartApi.getCartBooks(userId);
      return cart.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        return rejectWithValue(err.response?.data);
      }
      throw err;
    }
  },
);

const addCopyBook = createAsyncThunk(
  'addCopyBook',
  async (bookId: number, { rejectWithValue }) => {
    try {
      const books = await cartApi.addCopy(bookId);
      return books.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        return rejectWithValue(err.response?.data);
      }
      throw err;
    }
  },
);

const deleteCopyBook = createAsyncThunk(
  'deleteCopyBook',
  async (bookId: number, { rejectWithValue }) => {
    try {
      const books = await cartApi.deleteCopy(bookId);
      return books.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        return rejectWithValue(err.response?.data);
      }
      throw err;
    }
  },
);

const deleteBookInCart = createAsyncThunk(
  'deleteBookInCart',
  async (cartId: number, { rejectWithValue }) => {
    try {
      const books = await cartApi.deleteBook(cartId);
      return books.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        return rejectWithValue(err.response?.data);
      }
      throw err;
    }
  },
);

export default {
  addBookThunk,
  getCart,
  addCopyBook,
  deleteCopyBook,
  deleteBookInCart,
};
