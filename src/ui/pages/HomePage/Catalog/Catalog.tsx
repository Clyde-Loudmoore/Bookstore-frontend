import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import bookApi from 'api/bookApi';
import { useAppDispatch, useAppSelector } from 'store';
import bookThunk from 'store/thunks/bookThunk';
import cartThunk from 'store/thunks/cartThunk';

import Dropdown from 'ui/components/Dropdown';
import Pagination from 'ui/components/Pagination/Pagination';
import FilterGenre from 'ui/components/FilterGenre';
import FilterByInfo from 'ui/components/FilterByInfo';
import type { GenreType } from 'types';
import StyledCatalod from './Catalog.styled';
import PriceSlider from '../../../components/PriceSlider';
import Book from './Book';

import hideHeart from '../../../assets/icons/hideHeart.png';
import showHeart from '../../../assets/icons/showHeart.png';

const Catalog: React.FC = () => {
  const [bookGenre, setBookGenre] = React.useState<GenreType[]>();

  const user = useAppSelector((store) => store.user.user);
  const books = useAppSelector((store) => store.books.books);

  const [searchParams] = useSearchParams();

  const dispatch = useAppDispatch();

  const filteredBooks = books.filter((book) => {
    return book.title.toLowerCase().includes(book.title.toLowerCase());
  });

  const handleAddBookInCart = (userId: number, bookId: number) => {
    dispatch(cartThunk.addBook({ userId, bookId }));
  };

  React.useEffect(() => {
    (async () => {
      try {
        const genre = await bookApi.getGenres();
        const arrayGenre = genre.data.genres;
        setBookGenre(arrayGenre);
      } catch (err) {
        const error = err as Error;
        return toast.error(error.message);
      }
    })();
  }, []);

  React.useEffect(() => {
    const genre = searchParams.get('genres') || '';
    const search = searchParams.get('search') || '';
    const page = Number(searchParams.get('page') || 1);
    const minPrice = Number(searchParams.get('minPrice') || '5.99');
    const maxPrice = Number(searchParams.get('maxPrice') || '25.99');
    const sorting = searchParams.get('sorting') || 'Price';
    dispatch(
      bookThunk.getAllFiltredBooks({ genre, search, page, minPrice, maxPrice, sorting }),
    );
    if (user) {
      dispatch(cartThunk.getCart(user.id));
      dispatch(bookThunk.getLikedBooks(user.id));
    }
  }, [dispatch, searchParams, user]);

  return (
    <StyledCatalod>

      <div className="catalog__header">
        <h1>Catalog</h1>
        <div className="dropdown-wrapper">

          <Dropdown title="Genre">
            <FilterGenre genres={bookGenre} />
          </Dropdown>

          <Dropdown title="Price">
            <PriceSlider />
          </Dropdown>

          <Dropdown title={`Sort by: ${searchParams.get('sorting')?.toLocaleLowerCase() || 'price'}`}>
            <FilterByInfo />
          </Dropdown>

        </div>
      </div>

      <div className="catalog__books">
        {filteredBooks.map((book) => {
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
              addBookInCart={() => handleAddBookInCart(user!.id, book.id)}
            />

          );
        })}
      </div>

      <Pagination />

    </StyledCatalod>
  );
};

export default Catalog;
