import { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import type { FilterQueryType, AddRatingApiType } from 'types';

import bookApi from '../../api/bookApi';

const getAllFiltredBooks = createAsyncThunk('getAllFiltredBooks',
  async (filterData: FilterQueryType, { rejectWithValue }) => {
    try {
      const response = await bookApi.getFiltredBooks(filterData);
      const books = response.data.books;
      const maxPages = response.data.maxPages;

      return { books, maxPages };
    } catch (err) {
      if (err instanceof AxiosError) {
        return rejectWithValue(err.response?.data);
      }
      throw err;
    }
  });

const addBookRating = createAsyncThunk(
  'addRatingBookThunk',
  async (data: AddRatingApiType, { rejectWithValue }) => {
    const { userId, bookId, rating } = data;
    try {
      await bookApi.addBookRating({ userId, bookId, rating });
    } catch (err) {
      if (err instanceof AxiosError) {
        return rejectWithValue(err.response?.data);
      }
      throw err;
    }
  },
);

const addLikedBook = createAsyncThunk(
  'liked/addBook',
  async (bookId: number, { rejectWithValue }) => {
    try {
      const books = await bookApi.addLikedBook(bookId);
      return books.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        return rejectWithValue(err.response?.data);
      }
      throw err;
    }
  },
);

const deleteLikedBook = createAsyncThunk(
  'liked/deleteBook',
  async (bookId: number, { rejectWithValue }) => {
    try {
      const books = await bookApi.deleteLikedBook(bookId);
      return books.data;
    } catch (err) {
      if (err instanceof AxiosError) {
        return rejectWithValue(err.response?.data);
      }
      throw err;
    }
  },
);

const getLikedBooks = createAsyncThunk(
  'liked/getBooks',
  async (userId: number, { rejectWithValue }) => {
    try {
      const books = await bookApi.getLikedBooks(userId);
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
  getAllFiltredBooks,
  addBookRating,
  addLikedBook,
  deleteLikedBook,
  getLikedBooks,
};
