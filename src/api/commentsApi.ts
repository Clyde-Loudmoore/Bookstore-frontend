import type { CommentType } from 'src/types';

import { axiosInstance } from 'src/api/api';

const COMMENT_PATH = '/comment';

const getComments = (bookId: number) => {
  return axiosInstance.get<{ comments: CommentType[] }>(`${COMMENT_PATH}/comments/${bookId}`);
};

const addComment = (data: { userId: number; bookId: number; text: string }) => {
  return axiosInstance.post<{ comments: CommentType[] }>(`${COMMENT_PATH}/add`, data);
};

export default {
  getComments,
  addComment,
};
