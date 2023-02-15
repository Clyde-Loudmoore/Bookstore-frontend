import React from 'react';
import { Link } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from 'store';
import bookThunk from 'store/thunks/bookThunk';
import cartThunk from 'store/thunks/cartThunk';
import type { UserType } from 'types';

import EmptyFavoritesPage from 'ui/components/EmptyComponent/EmptyComponent';
import Button from 'ui/components/Button';
import StyledFavoritesPage from './FavoritesPage.styled';

import hideHeart from '../../assets/icons/hideHeart.png';
import showHeart from '../../assets/icons/showHeart.png';
import grandLine from '../../assets/icons/grandLine.png';

const FavoritesPage: React.FC = () => {
  const [elected, setSelected] = React.useState(true);

  const user = useAppSelector((store) => store.user.user) as UserType;
  const likedBooks = useAppSelector((store) => store.books.likedBooks);
  const likedBookId = likedBooks?.map((book) => book.bookId);

  const dispatch = useAppDispatch();

  const electedClass = 'elected';
  const unelectedClass = 'unelected';

  const deleteOrAddToFavorites = (bookId: number) => {
    if (elected) {
      dispatch(bookThunk.addLikedBook(bookId));
    } else {
      dispatch(bookThunk.deleteLikedBook(bookId));
    }
  };

  React.useEffect(() => {
    (async () => {
      dispatch(bookThunk.getLikedBooks(user.id));
      dispatch(cartThunk.getCart(user.id));
      if (likedBooks) {
        for (let i = 0; i < likedBooks.length; i++) {
          if (likedBooks[i].bookId === likedBookId![i]) {
            setSelected(false);
          } else {
            setSelected(true);
          }
        }
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <StyledFavoritesPage>
      {likedBooks?.length
        ? (
          likedBooks.map((book) => {
            return (
              <div key={book.id} className="container">
                <div className="wrapper">
                  <Button
                    className={`book-selected ${elected ? unelectedClass : electedClass}`}
                    type="submit"
                    onClick={() => deleteOrAddToFavorites(book.bookId)}
                  >
                    <img src={elected ? hideHeart : showHeart} />
                  </Button>
                  <Link className="cover-link" to={`/books/${book.bookId}`}>
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
              </div>
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
