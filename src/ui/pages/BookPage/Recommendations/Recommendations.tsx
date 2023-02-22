import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import cartThunk from 'src/store/thunks/cartThunk';
import bookApi from 'src/api/bookApi';
import type { BookType, UserType } from 'src/types';

import Book from 'src/ui/pages/HomePage/Catalog/Book';
import StyledRecommendations from 'src/ui/pages/BookPage/Recommendations/Recommendations.styled';

import { useAppSelector, useAppDispatch } from 'src/store';

import hideHeart from 'src/ui/assets/icons/hideHeart.png';
import showHeart from 'src/ui/assets/icons/showHeart.png';

const Recommendations: React.FC = () => {
  const [books, setBooks] = React.useState<BookType[]>();

  const user = useAppSelector((store) => store.user.user) as UserType;

  const [searchParams] = useSearchParams();

  const dispatch = useAppDispatch();

  const handleAddBookInCart = (userId: number, bookId: number) => {
    dispatch(cartThunk.addBook({ userId, bookId }));
  };

  React.useEffect(() => {
    (async () => {
      try {
        const allBooks = await bookApi.getAllBooks();
        setBooks(allBooks.data.books);
      } catch (err) {
        return toast.error('Recommendations are temporarily unavailable');
      }
    })();
  }, [dispatch, searchParams]);

  return (
    <StyledRecommendations>
      <h1 className="recommendations-header">Recommendations</h1>
      <div className="books-wrapper">

        {books
          ? books.map((book) => {
            return (

              <Book
                key={book.id}
                showImg={showHeart}
                hideImg={hideHeart}
                id={String(book.id)}
                bookCover={book.bookCover}
                title={book.title}
                author={book.author}
                price={book.price}
                rating={book.rating}
                addBookInCart={() => handleAddBookInCart(user.id, book.id)}
              />
            );
          }).slice(0, 4)
          : null}
      </div>

    </StyledRecommendations>
  );
};

export default Recommendations;
