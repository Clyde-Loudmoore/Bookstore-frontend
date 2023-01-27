/* eslint-disable no-console */
import React from 'react';
import { useParams } from 'react-router-dom';

import bookApi from 'api/bookApi';
import type { BookType } from 'types';

import StarRating from 'ui/components/StarRating';
import Button from 'ui/components/Button';
import StyledBookPage from './BookPage.styled';

import hideHeart from '../../../assets/icons/hideHeart.png';
import showHeart from '../../../assets/icons/showHeart.png';
import arrow from '../../../assets/icons/backArrow.png';

const BookPage: React.FC = () => {
  const [oneBook, setOneBook] = React.useState<BookType>();
  const [elected, setSelected] = React.useState(true);

  const electedClass = 'elected';
  const unelectedClass = 'unelected';

  const { bookId } = useParams();

  React.useEffect(() => {
    (async () => {
      try {
        const book = await bookApi.getBook(Number(bookId));
        setOneBook(book.data.book);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [bookId]);

  return (
    <StyledBookPage>

      <div className="book__wrapper">

        <div className="book-cover__wrapper">
          <Button
            className={`book-selected ${elected ? unelectedClass : electedClass}`}
            type="submit"
            onClick={() => setSelected(!elected)}
          >
            <img src={elected ? hideHeart : showHeart} />
          </Button>
          <img className="book-cover" src={oneBook?.bookCover} alt="Book" />
        </div>

        <div className="book-description__wrapper">
          <h1>{oneBook?.title}</h1>
          <h2 className="book-author">{oneBook?.author}</h2>

          <div className="book-rating__wrapper">

            <StarRating />

            <div className="book-rate">
              <img src={arrow} alt="<-" />
              <p>Rate this book</p>
            </div>
          </div>

          <h2 className="description-title">Description</h2>
          <p className="description-paragraph">{oneBook?.description}</p>

          <div className="book-buttons__wrapper">

            <div className="paperback-wrapper">
              <label>Paperback</label>
              <Button className="paperback">Not available</Button>
            </div>

            <div className="hardcover-wrapper">
              <label>Hardcover</label>
              <Button className="hardcover">${oneBook?.price} USD</Button>
            </div>

          </div>

        </div>

      </div>

    </StyledBookPage>
  );
};

export default BookPage;
