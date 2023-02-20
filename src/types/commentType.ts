import type { UserType } from 'src/types/userTypes';

export type CommentType = {
  id: number;
  text: string;
  bookId: number;
  userId: number;
  createdTime: string;
  user: UserType;
};
