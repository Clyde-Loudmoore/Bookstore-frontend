import type { UserType } from 'src/types/userTypes';
import type { BookType } from 'src/types/bookTypes';

export type AddBookType = {
  userId: UserType['id'];
  bookId: BookType['id'];
};
