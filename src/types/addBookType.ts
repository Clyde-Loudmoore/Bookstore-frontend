import type { UserType } from './userTypes';
import type { BookType } from './bookTypes';

export type AddBookType = {
  userId: UserType['id'];
  bookId: BookType['id'];
};
