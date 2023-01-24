/* eslint-disable no-console */
import React from 'react';
import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../../store';
import { getAllBooks } from '../../../../store/thunks/bookThunk';

// import PriceSlider from '../../../components/PriceSlider/PriceSlider';
import StyledCatalod from './Catalog.styled';
import StyledButton from '../../../components/Button';

import heart from '../../../../assets/icons/heart.png';

const Catalog: React.FC = () => {
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
    <StyledCatalod>

      <div className="catalog__header">
        <h1>Catalog</h1>
        <div className="catalog__header-select">
          <select name="Genre" className="sort-by-genre">
            <option value="Fiction">Fiction</option>
            <option value="Non—fiction">Non—fiction</option>
            <option value="Light fiction">Light fiction</option>
            <option value="Science-fiction">Science-fiction</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Business & Finance">Business & Finance</option>
            <option value="Politics">Politics</option>
            <option value="Travel books">Travel books</option>
            <option value="Autobiography">Autobiography</option>
            <option value="History">History</option>
            <option value="Thriller / Mystery">Thriller / Mystery</option>
            <option value="Romance">Romance</option>
            <option value="Satire">Satire</option>
            <option value="Horror">Horror</option>
            <option value="Health / Medicine">Health / Medicine</option>
            <option value="Children`s books">Children`s books</option>
            <option value="Encyclopedia">Encyclopedia</option>
          </select>

          {/* <select>
            <option value={<PriceSlider />} />
            <PriceSlider />
          </select> */}

          <select name="bookinfo" className="sotr-by-bookinfo">
            <option value="Price">Price</option>
            <option value="Name">Name</option>
            <option value="Author name">Author nameRating</option>
            <option value="Rating">Rating</option>
            <option value="Date of issue">Date of issue</option>
          </select>
        </div>
      </div>

      <div className="catalog__books">
        {books.map((book) => {
          return (

            <div className="book__wrapper" key={book.id}>
              <div className="book-cover">
                <StyledButton className="book-selected" type="submit"><img src={heart} /></StyledButton>
                <Link className="catalog__book-cover-link" to={`books/${String(book.id)}`}>
                  <img className="book-cover-img" src={book.bookCover} />
                </Link>
              </div>
              <p className="book-title">{book.title}</p>
              <p className="book-author">{book.author}</p>
              {/* <StarRating /> */}
              <StyledButton className="book-price_button" type="submit">${book.price} USD</StyledButton>
            </div>

          );
        })}
      </div>

    </StyledCatalod>
  );
};

export default Catalog;
