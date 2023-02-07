import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import Book from 'ui/pages/HomePage/Catalog/Book/Book';
import StyledRecommendations from './Recommendations.styled';

import { useAppSelector, useAppDispatch } from '../../../../store';
import bookThunk from '../../../../store/thunks/bookThunk';

import hideHeart from '../../../../assets/icons/hideHeart.png';
import showHeart from '../../../../assets/icons/showHeart.png';

const Recommendations: React.FC = () => {
  const books = useAppSelector((store) => store.books.books);
  const [searchParams] = useSearchParams();

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    (async () => {
      try {
        const genre = searchParams.get('genres') || '';
        // const search = searchParams.get('search') || '';
        // const page = Number(searchParams.get('page') || 1);
        const minPrice = Number(searchParams.get('minPrice') || '5.67');
        const maxPrice = Number(searchParams.get('maxPrice') || '25.99');
        const sorting = searchParams.get('sorting') || 'Name';
        dispatch(bookThunk.getAllFiltredBooks({ genre, minPrice, maxPrice, sorting }));
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
