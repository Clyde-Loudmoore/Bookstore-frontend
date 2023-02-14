import type { UserType } from './userTypes';

export type CommentType = {
  id: number;
  text: string;
  bookId: number;
  userId: number;
  createdTime: string;
  user: UserType;
};
