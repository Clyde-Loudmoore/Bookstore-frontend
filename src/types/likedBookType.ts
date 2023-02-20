import type { BookType } from 'src/types/bookTypes';
import type { UserType } from 'src/types/userTypes';

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
