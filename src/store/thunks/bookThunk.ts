import { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import type { FilterQueryType, AddRatingApiType } from 'types';

import bookApi from '../../api/bookApi';

const getAllFiltredBooks = createAsyncThunk('getAllFiltredBooks',
  async (filterData: FilterQueryType, { rejectWithValue }) => {
    try {
      const books = await bookApi.getFiltredBooks(filterData);
      return books.data.books;
    } catch (err) {
      if (err instanceof AxiosError) {
        return rejectWithValue(err.response?.data);
      }
      throw err;
    }
  });

const addBookRatingThunk = createAsyncThunk(
  'addRatingBookThunk',
  async (data: AddRatingApiType, { rejectWithValue }) => {
    const { userId, bookId, rating } = data;
    try {
      await bookApi.addBookRating({ userId, bookId, rating });
    } catch (err) {
      const error = err as AxiosError;
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response.data);
    }
  },
);

export default {
  getAllFiltredBooks,
  addBookRatingThunk,
};
