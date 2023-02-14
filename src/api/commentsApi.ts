import type { CommentType } from 'types';

import api from './api';

const COMMENT_PATH = '/comment';

const getComments = (bookId: number) => {
  return api.axiosInstance.get<{ comments: CommentType[] }>(`${COMMENT_PATH}/comments/${bookId}`);
};

const addComment = (data: { userId: number; bookId: number; text: string }) => {
  return api.axiosInstance.post<{ comments: CommentType[] }>(`${COMMENT_PATH}/add`, data);
};

export default {
  getComments,
  addComment,
};