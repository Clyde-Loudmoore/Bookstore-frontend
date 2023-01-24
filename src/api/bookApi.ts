import type { BookType } from '../types';

import { axiosInstance } from './api';

const BOOK_PATH = '/books';

const getBooks = () => {
  return axiosInstance.get<{ books: BookType[] }>(`${BOOK_PATH}/all-books`);
};

const getBook = (bookId: number) => {
  return axiosInstance.get<{ book: BookType }>(`${BOOK_PATH}/${bookId}`);
};

export default {
  getBooks,
  getBook,
};
