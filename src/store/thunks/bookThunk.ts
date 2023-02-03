import { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import type { FilterQueryType } from 'types';

import bookApi from '../../api/bookApi';

const getAllBooks = createAsyncThunk('getAllBooks', async () => {
  const res = await bookApi.getBooks();
  return res.data.books;
});

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

export default {
  getAllBooks,
  getAllFiltredBooks,
};
