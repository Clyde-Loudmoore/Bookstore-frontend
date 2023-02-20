import type { BookType } from 'src/types/bookTypes';
import type { UserType } from 'src/types/userTypes';

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
