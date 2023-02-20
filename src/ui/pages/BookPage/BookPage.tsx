/* eslint-disable no-console */
import React from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import bookApi from 'src/api/bookApi';
import type { UserType, BookType } from 'src/types';
import { useAppSelector, useAppDispatch } from 'src/store';
import cartThunk from 'src/store/thunks/cartThunk';
import bookThunk from 'src/store/thunks/bookThunk';

import StarRating from 'src/ui/components/StarRating';
import Button from 'src/ui/components/Button';
import Comments from 'src/ui/pages/BookPage/Comments';
import Recommendations from 'src/ui/pages/BookPage/Recommendations';
import StyledBookPage from 'src/ui/pages/BookPage/BookPage.styled';
import FooterBanner from 'src/ui/pages/HomePage/FooterBanner';

import hideHeart from 'src/ui/assets/icons/hideHeart.png';
import showHeart from 'src/ui/assets/icons/showHeart.png';
import arrow from 'src/ui/assets/icons/backArrow.png';
import star from 'src/ui/assets/icons/star.png';

const BookPage: React.FC = () => {
  const [oneBook, setOneBook] = React.useState<BookType>();
  const [elected, setSelected] = React.useState(true);
  const [anotherButton, setAnotherButton] = React.useState(false);

  const user = useAppSelector((store) => store.user.user) as UserType;
  const likedBooks = useAppSelector((store) => store.books.likedBooks);
  const cart = useAppSelector((store) => store.books.cart);

  const dispatch = useAppDispatch();

  const electedClass = 'elected';
  const unelectedClass = 'unelected';

  const { bookId } = useParams();

  const handleAddBookInCart = (userId: number, bookId: number) => {
    dispatch(cartThunk.addBook({ userId, bookId }));
  };

  const deleteOrAddToFavorites = (bookId: number) => {
    if (elected) {
      dispatch(bookThunk.addLikedBook(bookId));
      setSelected(false);
    } else {
      dispatch(bookThunk.deleteLikedBook(bookId));
      setSelected(true);
    }
  };

  React.useEffect(() => {
    (async () => {
      try {
        const book = await bookApi.getBook(Number(bookId));
        setOneBook(book.data.book);
        if (cart) {
          for (let i = 0; i < cart.length; i++) {
            if (cart[i].bookId === Number(bookId)) {
              setAnotherButton(true);
            }
          }
        }
        if (likedBooks) {
          for (let j = 0; j < likedBooks.length; j++) {
            if (likedBooks[j].bookId === Number(bookId)) {
              setSelected(false);
            }
          }
        }
      } catch (err) {
        return toast.error('Please reload the page or log in later');
      }
    })();
  }, [bookId, cart, likedBooks]);

  if (user) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useEffect(() => {
      (async () => {
        dispatch(cartThunk.getCart(user.id));
        dispatch(bookThunk.getLikedBooks(user.id));
      })();
    }, [dispatch, user.id]);
  }

  return (
    <StyledBookPage>

      <section className="book__wrapper">

        <div className="book-cover__wrapper">
          <Button
            className={`book-selected ${elected ? unelectedClass : electedClass}`}
            type="submit"
            onClick={() => deleteOrAddToFavorites(Number(bookId))}
          >
            <img src={elected ? hideHeart : showHeart} />
          </Button>
          <img className="book-cover__img" src={oneBook?.bookCover} alt="Book" />
        </div>

        <div className="book-title">
          <h1>{oneBook?.title}</h1>
          <h2 className="book-author">{oneBook?.author}</h2>

          <div className="book-rating__wrapper">

            <StarRating className="book-rating" starRating={Number(oneBook?.rating)}>
              <img className="rating-value__image" src={star} alt="+" />
            </StarRating>

            <div className="book-rate">
              <img src={arrow} alt="<-" />
              <p>Rate this book</p>
            </div>
          </div>
        </div>

        <div className="book-description">
          <h2 className="description-title">Description</h2>
          <p className="description-paragraph">{oneBook?.description}</p>

          <div className="book-buttons__wrapper">
            <div className="paperback-wrapper">
              <label className="label">Paperback</label>
              <Button className="paperback">Not available</Button>
            </div>

            <div className="hardcover-wrapper">
              <label className="label">Hardcover</label>

              {anotherButton
                ? <Button className="dont-active">Added to cart</Button>
                : (
                  <Button
                    className="hardcover"
                    type="submit"
                    onClick={() => handleAddBookInCart(user.id, Number(bookId))}
                  >
                    ${oneBook?.price} USD
                  </Button>
                )
              }
            </div>
          </div>

        </div>

      </section>

      <Comments />

      {!user
        ? (
          <FooterBanner className="footer-banner" />
        )
        : null}

      <Recommendations />

    </StyledBookPage>
  );
};

export default BookPage;
