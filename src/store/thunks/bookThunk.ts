import { createAsyncThunk } from '@reduxjs/toolkit';

import bookApi from '../../api/bookApi';

export const getAllBooks = createAsyncThunk('getAllBooks', async () => {
  const res = await bookApi.getBooks();
  return res.data.books;
});
