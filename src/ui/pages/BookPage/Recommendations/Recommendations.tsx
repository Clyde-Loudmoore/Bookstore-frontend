import React from 'react';

import Book from 'ui/pages/HomePage/Catalog/Book/Book';
import StyledRecommendations from './Recommendations.styled';

import { useAppSelector, useAppDispatch } from '../../../../store';
import { getAllBooks } from '../../../../store/thunks/bookThunk';

import hideHeart from '../../../../assets/icons/hideHeart.png';
import showHeart from '../../../../assets/icons/showHeart.png';

const Recommendations: React.FC = () => {
  const books = useAppSelector((store) => store.books.books);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    (async () => {
      try {
        dispatch(getAllBooks());
      } catch (err) {
        console.log(err);
      }
    })();
  }, [dispatch]);

  return (
    <StyledRecommendations>
      <h1 className="recommendations-header">Recommendations</h1>
      <div className="books-wrapper">

        {books.map((book) => {
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
        }).slice(0, 4)}
      </div>

    </StyledRecommendations>
  );
};

export default Recommendations;
