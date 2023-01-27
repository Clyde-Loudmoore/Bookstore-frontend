/* eslint-disable no-console */
import React from 'react';

import Dropdown from 'ui/components/Dropdown/Dropdown';
import FilterGenre from 'ui/components/FilterGenre';
import FilterByInfo from 'ui/components/FilterByInfo/FilterByInfo';
import StyledCatalod from './Catalog.styled';
import PriceSlider from '../../../components/PriceSlider';
import Book from './Book';

import { useAppDispatch, useAppSelector } from '../../../../store';
import { getAllBooks } from '../../../../store/thunks/bookThunk';

import heart from '../../../../assets/icons/heart.png';

const Catalog: React.FC = () => {
  const [activeGenre, setActiveGenre] = React.useState(true);
  const [activePrice, setActivePrice] = React.useState(true);
  const [activeSort, setActiveSort] = React.useState(true);

  const books = useAppSelector((store) => store.books.books);
  const dispatch = useAppDispatch();

  const handleChangeActiveGenre = () => {
    if (activeGenre) {
      setActiveGenre(false);
    } else {
      setActiveGenre(true);
    }
  };

  const handleChangeActivePrice = () => {
    if (activePrice) {
      setActivePrice(false);
    } else {
      setActivePrice(true);
    }
  };

  const handleChangeActiveSort = () => {
    if (activeSort) {
      setActiveSort(false);
    } else {
      setActiveSort(true);
    }
  };

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
        <div className="dropdown-wrapper">

          <Dropdown title="Genre" active={activeGenre} onClick={handleChangeActiveGenre}>
            <FilterGenre hidden={activeGenre} />
          </Dropdown>

          <Dropdown title="Price" active={activePrice} onClick={handleChangeActivePrice}>
            <PriceSlider hidden={activePrice} />
          </Dropdown>

          <Dropdown title="Sort by" active={activeSort} onClick={handleChangeActiveSort}>
            <FilterByInfo hidden={activeSort} />
          </Dropdown>

        </div>
      </div>

      <div className="catalog__books">
        {books.map((book) => {
          return (

            <Book
              key={book.id}
              img={heart}
              id={String(book.id)}
              bookCover={book.bookCover}
              title={book.title}
              author={book.author}
              price={book.price}
            />

          );
        })}
      </div>

    </StyledCatalod>
  );
};

export default Catalog;
