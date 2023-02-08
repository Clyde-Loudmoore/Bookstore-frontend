import type { AxiosRequestConfig } from 'axios';

import constants from 'utils/constants';

import type { BookType, GenreType, FilterQueryType, RatingBookType } from '../types';

import api from './api';

const getBook = (bookId: number) => {
  return api.axiosInstance.get<{ book: BookType }>(`${constants.PATHS.BOOK_PATH}/${bookId}`);
};

const getGenres = () => {
  return api.axiosInstance.get<{ genres: GenreType[] }>(`${constants.PATHS.BOOK_PATH}/genres`);
};

const getFiltredBooks = (query: FilterQueryType) => {
  return api.axiosInstance.get<{ books: BookType[]; maxPages: FilterQueryType }>(`${constants.PATHS.BOOK_PATH}/filtred-books`, { params: { ...query } } as AxiosRequestConfig);
};

const getBookRating = (userId: number, bookId: number) => {
  return api.axiosInstance.get<RatingBookType>(`${constants.PATHS.BOOK_PATH}/rating/${userId}/${bookId}`);
};

const addBookRating = (data: { userId: number; bookId: number; rating: number }) => {
  return api.axiosInstance.post(`${constants.PATHS.BOOK_PATH}/add`, data);
};

export default {
  getBook,
  getGenres,
  getFiltredBooks,
  getBookRating,
  addBookRating,
};
