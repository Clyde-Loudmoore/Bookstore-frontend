import type { BookType } from './bookTypes';
import type { UserType } from './userTypes';

export type LikedBookType = {
  book: BookType;
  bookId: BookType['id'];
  id: number;
  userId: UserType['id'];
};
