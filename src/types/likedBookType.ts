import type { BookType } from './bookTypes';
import type { UserType } from './userTypes';

export type LikedBookType = {
  book: BookType;
  bookId: BookType['id'];
  userId: UserType['id'];
  id: number;
  cover: BookType['bookCover'];
  title: BookType['title'];
  price: BookType['price'];
  author: BookType['author'];
};
