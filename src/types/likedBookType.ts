import type { BookType } from './bookTypes';

export type LikedBookType = {
  book: BookType;
  bookId: BookType['id'];
  id: number;
  cover: BookType['bookCover'];
  title: BookType['title'];
  price: BookType['price'];
  author: BookType['author'];
};
