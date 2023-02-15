import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import bookApi from 'api/bookApi';
import type { BookType } from 'types';

import Book from 'ui/pages/HomePage/Catalog/Book';
import StyledRecommendations from './Recommendations.styled';

import { useAppDispatch } from '../../../../store';

import hideHeart from '../../../assets/icons/hideHeart.png';
import showHeart from '../../../assets/icons/showHeart.png';

const Recommendations: React.FC = () => {
  const [books, setBooks] = React.useState<BookType[]>();

  const [searchParams] = useSearchParams();

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    (async () => {
      try {
        const allBooks = await bookApi.getAllBooks();
        setBooks(allBooks.data.books);
      } catch (err) {
        const error = err as Error;
        return toast.error(error.message);
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
              />
            );
          }).slice(0, 4)
          : null}
      </div>

    </StyledRecommendations>
  );
};

export default Recommendations;
