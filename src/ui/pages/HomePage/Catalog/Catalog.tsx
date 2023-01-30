import React from 'react';

import Dropdown from 'ui/components/Dropdown';
import Pagination from 'ui/components/Pagination/Pagination';
import FilterGenre from 'ui/components/FilterGenre';
import FilterByInfo from 'ui/components/FilterByInfo';
import StyledCatalod from './Catalog.styled';
import PriceSlider from '../../../components/PriceSlider';
import Book from './Book';

import { useAppDispatch, useAppSelector } from '../../../../store';
import { getAllBooks } from '../../../../store/thunks/bookThunk';

import hideHeart from '../../../../assets/icons/hideHeart.png';
import showHeart from '../../../../assets/icons/showHeart.png';

const Catalog: React.FC = () => {
  const [activeGenre, setActiveGenre] = React.useState(true);
  const [activePrice, setActivePrice] = React.useState(true);
  const [activeSort, setActiveSort] = React.useState(true);

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
        <div className="dropdown-wrapper">

          <Dropdown title="Genre" active={activeGenre} onClick={() => setActiveGenre(!activeGenre)}>
            <FilterGenre hidden={activeGenre} />
          </Dropdown>

          <Dropdown title="Price" active={activePrice} onClick={() => setActivePrice(!activePrice)}>
            <PriceSlider hidden={activePrice} />
          </Dropdown>

          <Dropdown title="Sort by" active={activeSort} onClick={() => setActiveSort(!activeSort)}>
            <FilterByInfo hidden={activeSort} />
          </Dropdown>

        </div>
      </div>

      <div className="catalog__books">
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
        })}
      </div>

      <Pagination />

    </StyledCatalod>
  );
};

export default Catalog;
