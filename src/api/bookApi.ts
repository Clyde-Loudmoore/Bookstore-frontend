import type { AxiosRequestConfig } from 'axios';

import constants from 'utils/constants';

import type { BookType, GenreType, FilterQueryType } from '../types';

import api from './api';

const getBooks = () => {
  return api.axiosInstance.get<{ books: BookType[] }>(`${constants.PATHS.BOOK_PATH}/all-books`);
};

const getBook = (bookId: number) => {
  return api.axiosInstance.get<{ book: BookType }>(`${constants.PATHS.BOOK_PATH}/${bookId}`);
};

const getGenres = () => {
  return api.axiosInstance.get<{ genres: GenreType[] }>(`${constants.PATHS.BOOK_PATH}/genres`);
};

const getFiltredBooks = (query: FilterQueryType) => {
  return api.axiosInstance.get<{ books: BookType[] }>(`${constants.PATHS.BOOK_PATH}/filtred-books`, { params: { ...query } } as AxiosRequestConfig);
};

export default {
  getBooks,
  getBook,
  getGenres,
  getFiltredBooks,
};
