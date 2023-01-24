import type { BookType } from '../types';

import api from './api';

const BOOK_PATH = '/books';

const getBooks = () => {
  return api.axiosInstance.get<{ books: BookType[] }>(`${BOOK_PATH}/all-books`);
};

const getBook = (bookId: number) => {
  return api.axiosInstance.get<{ book: BookType }>(`${BOOK_PATH}/${bookId}`);
};

export default {
  getBooks,
  getBook,
};
