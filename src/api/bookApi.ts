import type { BookType } from '../types';

import { axiosInstance } from './api';

const BOOK_PATH = '/books';

export const getBooks = () => {
  return axiosInstance.get<{ books: BookType[] }>(`${BOOK_PATH}/all-books`);
};

export const getBook = (bookId: number) => {
  return axiosInstance.get<{ book: BookType }>(`${BOOK_PATH}/${bookId}`);
};
