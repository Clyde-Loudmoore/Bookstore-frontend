import React from 'react';
import { Link } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from 'store';
import bookThunk from 'store/thunks/bookThunk';

import EmptyFavoritesPage from 'ui/components/EmptyComponent/EmptyComponent';
import StyledFavoritesPage from './FavoritesPage.styled';

import grandLine from '../../assets/icons/grandLine.png';

const FavoritesPage: React.FC = () => {
  const likedBooks = useAppSelector((store) => store.books.likedBooks);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    (async () => {
      dispatch(bookThunk.getLikedBooks());
    })();
  }, [dispatch]);

  return (
    <StyledFavoritesPage>
      {likedBooks?.length
        ? (
          likedBooks.map((book) => {
            return (
              <main key={book.id}>
                <div className="wrapper">
                  <Link className="catalog__book-cover-link" to={`/books/${book.bookId}`}>
                    <img className="cover" src={book.book.bookCover} />
                  </Link>

                  <div className="info">
                    <h1 className="title">{book.book.title}</h1>
                    <h2 className="author">{book.book.author}</h2>
                  </div>
                </div>

                <div className="grand-line">
                  <img src={grandLine} />
                </div>
              </main>
            );
          })

        )
        : (
          <EmptyFavoritesPage
            header="Undecided about your favorite book?"
            text="Go to the catalog, you will definitely like something!"
            textButton="Go to catalog"
          />
        )}

    </StyledFavoritesPage>
  );
};

export default FavoritesPage;
