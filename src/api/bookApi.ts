import type { AxiosRequestConfig } from 'axios';

import api from 'src/api/api';
import type { BookType, GenreType, FilterQueryType, RatingBookType, LikedBookType } from 'src/types';

const BOOK_PATH = '/books';
const LIKED_BOOK_PATH = '/liked';

const getBook = (bookId: number) => {
  return api.axiosInstance.get<{ book: BookType }>(`${BOOK_PATH}/${bookId}`);
};

const getAllBooks = () => {
  return api.axiosInstance.get<{ books: BookType[] }>(`${BOOK_PATH}/all-books`);
};

const getFiltredBooks = (query: FilterQueryType) => {
  return api.axiosInstance.get<{ books: BookType[]; maxPages: FilterQueryType }>(`${BOOK_PATH}/filtred-books`, { params: { ...query } } as AxiosRequestConfig);
};

const getGenres = () => {
  return api.axiosInstance.get<{ genres: GenreType[] }>(`${BOOK_PATH}/genres`);
};

const getBookRating = (userId: number, bookId: number) => {
  return api.axiosInstance.get<RatingBookType>(`${BOOK_PATH}/rating/${userId}/${bookId}`);
};

const addBookRating = (data: { userId: number; bookId: number; rating: number }) => {
  return api.axiosInstance.post(`${BOOK_PATH}/add`, data);
};

const getLikedBooks = (userId: number) => {
  return api.axiosInstance.get<{ books: LikedBookType[] }>(`${LIKED_BOOK_PATH}/${userId}`, { params: { userId } });
};

const addLikedBook = (bookId: number) => {
  return api.axiosInstance.post<{ books: LikedBookType[] }>(
    `${LIKED_BOOK_PATH}/add/${bookId}`,
  );
};

const deleteLikedBook = (bookId: number) => {
  return api.axiosInstance.delete<{ books: LikedBookType[] }>(
    `${LIKED_BOOK_PATH}/delete/${bookId}`,
  );
};

export default {
  getBook,
  getAllBooks,
  getFiltredBooks,
  getGenres,
  getBookRating,
  addBookRating,
  getLikedBooks,
  addLikedBook,
  deleteLikedBook,
};
