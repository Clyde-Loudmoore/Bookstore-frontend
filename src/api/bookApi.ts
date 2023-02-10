import type { AxiosRequestConfig } from 'axios';

import type { BookType, GenreType, FilterQueryType, RatingBookType } from '../types';

import api from './api';

const BOOK_PATH = '/books';

const getBook = (bookId: number) => {
  return api.axiosInstance.get<{ book: BookType }>(`${BOOK_PATH}/${bookId}`);
};

const getGenres = () => {
  return api.axiosInstance.get<{ genres: GenreType[] }>(`${BOOK_PATH}/genres`);
};

const getFiltredBooks = (query: FilterQueryType) => {
  return api.axiosInstance.get<{ books: BookType[]; maxPages: FilterQueryType }>(`${BOOK_PATH}/filtred-books`, { params: { ...query } } as AxiosRequestConfig);
};

const getBookRating = (userId: number, bookId: number) => {
  return api.axiosInstance.get<RatingBookType>(`${BOOK_PATH}/rating/${userId}/${bookId}`);
};

const addBookRating = (data: { userId: number; bookId: number; rating: number }) => {
  return api.axiosInstance.post(`${BOOK_PATH}/add`, data);
};

export default {
  getBook,
  getGenres,
  getFiltredBooks,
  getBookRating,
  addBookRating,
};
