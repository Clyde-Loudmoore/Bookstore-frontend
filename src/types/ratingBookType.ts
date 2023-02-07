import type { BookType } from './bookTypes';
import type { UserType } from './userTypes';

export type RatingBookType = {
  id: number;
  bookId: BookType['id'];
  userId: UserType['id'];
  bookRating: {
    id: number;
    bookId: number;
    userId: number;
    rating: string;
  };
};
