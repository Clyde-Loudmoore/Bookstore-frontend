import type { CartType } from 'src/types';

import { axiosInstance } from './api';

const CART_PATH = '/cart';

const addBook = (userId: number, bookId: number) => {
  return axiosInstance.post<{ books: CartType[] }>(`${CART_PATH}/add`, { userId, bookId });
};

const getCartBooks = (userId: number) => {
  return axiosInstance.get<{ books: CartType[] }>(`${CART_PATH}/${userId}`, { params: { userId } });
};

const addCopy = (bookId: number) => {
  return axiosInstance.get<{ books: CartType[] }>(`${CART_PATH}/copy/${bookId}`);
};

const deleteBook = (cartId: number) => {
  return axiosInstance.delete<{ books: CartType[] }>(`${CART_PATH}/delete/${cartId}`);
};

const deleteCopy = (bookId: number) => {
  return axiosInstance.delete<{ books: CartType[] }>(`${CART_PATH}/delete-copy/${bookId}`);
};

export default {
  addBook,
  getCartBooks,
  addCopy,
  deleteBook,
  deleteCopy,
};
