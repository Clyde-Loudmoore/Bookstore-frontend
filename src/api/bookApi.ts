import type { BookType } from '../types/bookTypes';

import { axiosInstance } from './api';

const BOOK_PATH = '/books';

export const getBooks = () => {
  return axiosInstance.get<{ books: BookType[] }>(`${BOOK_PATH}/all-books`);
};
