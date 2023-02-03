import type { AxiosRequestConfig } from 'axios';

import type { BookType, GenreType, FilterQueryType } from '../types';

import api from './api';

const BOOK_PATH = '/books';

const getBooks = () => {
  return api.axiosInstance.get<{ books: BookType[] }>(`${BOOK_PATH}/all-books`);
};

const getBook = (bookId: number) => {
  return api.axiosInstance.get<{ book: BookType }>(`${BOOK_PATH}/${bookId}`);
};

const getGenres = () => {
  return api.axiosInstance.get<{ genres: GenreType[] }>(`${BOOK_PATH}/genres`);
};

const getFiltredBooks = (query: FilterQueryType) => {
  return api.axiosInstance.get<{ books: BookType[] }>(`${BOOK_PATH}/filtred-books`, { params: { ...query } } as AxiosRequestConfig);
};

export default {
  BOOK_PATH,
  getBooks,
  getBook,
  getGenres,
  getFiltredBooks,
};
