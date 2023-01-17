import { createAsyncThunk } from '@reduxjs/toolkit';

import { getBooks } from '../api/bookApi';

export const getAllBooks = createAsyncThunk('getAllBooks', async () => {
  const res = await getBooks();
  return res.data;
});
