import React from 'react';
import { Link } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from 'store';
import bookThunk from 'store/thunks/bookThunk';
import bookApi from 'api/bookApi';
import type { BookType } from 'types';

import Button from 'ui/components/Button';
import StarRating from 'ui/components/StarRating';
import StyledBook from './Book.styled';

export type PropsType = {
  showImg?: string;
  hideImg: string;
  id?: string;
  bookCover?: string;
  title?: string;
  author?: string;
  price?: number;
  img?: string;
  addBookInCart?: () => void;
};

const Book: React.FC<PropsType> = (props) => {
  const [oneBook, setOneBook] = React.useState<BookType>();
  const [elected, setSelected] = React.useState(true);
  const [anotherButton, setAnotherButton] = React.useState(false);

  const books = useAppSelector((store) => store.books.books);
  const cart = useAppSelector((store) => store.books.cart);
  const likedBooks = useAppSelector((store) => store.books.likedBooks);

  const dispatch = useAppDispatch();

  const electedClass = 'elected';
  const unelectedClass = 'unelected';

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
      const book = await bookApi.getBook(Number(props.id));
      setOneBook(book.data.book);

      if (cart) {
        for (let i = 0; i < cart.length; i++) {
          if (cart[i].bookId === Number(props.id)) {
            setAnotherButton(true);
          }
        }
        if (likedBooks) {
          for (let j = 0; j < likedBooks.length; j++) {
            if (likedBooks[j].bookId === Number(props.id)) {
              setSelected(false);
            }
          }
        }
      }
    })();
  }, [books, cart, likedBooks, props.id]);

  return (
    <StyledBook>
      <div className="book-cover">
        <Button className={`book-selected ${elected ? unelectedClass : electedClass}`} type="submit" onClick={() => deleteOrAddToFavorites(Number(props.id))}>
          <img src={elected ? props.hideImg : props.showImg} />
        </Button>
        <Link className="catalog__book-cover-link" to={`/books/${props.id}`}>
          <img className="book-cover-img" src={props.bookCover} />
        </Link>
      </div>
      <p className="book-title">{props.title}</p>
      <p className="book-author">{props.author}</p>

      <StarRating starRating={Number(oneBook?.rating)} />

      {anotherButton
        ? <Button className="dont-active">Added to cart</Button>
        : (
          <Button
            className="book-price_button"
            type="submit"
            onClick={props.addBookInCart}
          >
            ${props.price} USD
          </Button>
        )
      }

    </StyledBook>
  );
};

export default Book;
