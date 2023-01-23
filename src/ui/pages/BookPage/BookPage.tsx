/* eslint-disable no-console */
import React from 'react';
import { useParams } from 'react-router-dom';

import { getBook } from '../../../api/bookApi';
import type { BookType } from '../../../types';

import StyledBookPage from './BookPage.styled';
import StyledButton from '../../components/Button';

import heart from './images/heart.png';
import arrow from './images/backArrow.png';

const BookPage: React.FC = () => {
  const [oneBook, setOneBook] = React.useState<BookType>();

  const { id } = useParams();

  React.useEffect(() => {
    (async () => {
      try {
        const book = await getBook(Number(id));
        setOneBook(book.data.book);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [id]);

  return (
    <StyledBookPage>

      <div className="book__wrapper">

        <div className="book-cover__wrapper">
          <StyledButton className="book-selected" type="submit"><img src={heart} /></StyledButton>
          <img className="book-cover" src={oneBook?.bookCover} alt="Book" />
        </div>

        <div className="book-description__wrapper">
          <h1>{oneBook?.title}</h1>
          <h2 className="book-author">{oneBook?.author}</h2>

          <div className="book-rating__wrapper">
            {/* <StarRating /> */}
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
              <StyledButton className="paperback">Not available</StyledButton>
            </div>

            <div className="hardcover-wrapper">
              <label>Hardcover</label>
              <StyledButton className="hardcover">${oneBook?.price} USD</StyledButton>
            </div>

          </div>

        </div>

      </div>

    </StyledBookPage>
  );
};

export default BookPage;
