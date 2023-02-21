import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import bookApi from 'src/api/bookApi';
import { useAppDispatch, useAppSelector } from 'src/store';
import bookThunk from 'src/store/thunks/bookThunk';
import cartThunk from 'src/store/thunks/cartThunk';

import type { UserType, GenreType } from 'src/types';

import Dropdown from 'src/ui/pages/HomePage/Catalog/Dropdown';
import Pagination from 'src/ui/pages/HomePage/Catalog/Pagination';
import StyledCatalod from 'src/ui/pages/HomePage/Catalog/Catalog.styled';
import FilterByInfo from 'src/ui/pages/HomePage/Catalog/Dropdown/FilterByInfo';
import FilterGenre from 'src/ui/pages/HomePage/Catalog/Dropdown/FilterGenre';
import PriceSlider from 'src/ui/pages/HomePage/Catalog/Dropdown/PriceSlider';
import Book from 'src/ui/pages/HomePage/Catalog/Book';

import hideHeart from 'src/ui/assets/icons/hideHeart.png';
import showHeart from 'src/ui/assets/icons/showHeart.png';

const Catalog: React.FC = () => {
  const [bookGenre, setBookGenre] = React.useState<GenreType[]>();
  const [saveSorting, setSaveSorting] = React.useState('');

  const [searchParams, setSearchParams] = useSearchParams({});

  const user = useAppSelector((store) => store.user.user) as UserType;
  const books = useAppSelector((store) => store.books.books);

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
        return toast.error('Genre filtering is temporarily unavailable');
      }
    })();
  }, []);

  React.useEffect(() => {
    const page = Number(searchParams.get('page') || 1);
    const sorting = searchParams.get('sorting') || saveSorting || 'Price';
    const genre = searchParams.get('genres') || '';
    const minPrice = Number(searchParams.get('minPrice') || '5.99');
    const maxPrice = Number(searchParams.get('maxPrice') || '25.99');
    const search = searchParams.get('search') || '';

    setSearchParams({
      page: String(page),
      sorting,
      genre,
      minPrice: String(minPrice),
      maxPrice: String(maxPrice),
      search,
    });

    dispatch(
      bookThunk.getAllFiltredBooks({ genre, search, page, minPrice, maxPrice, sorting }),
    );
    if (user) {
      dispatch(cartThunk.getCart(user.id));
      dispatch(bookThunk.getLikedBooks(user.id));
    }

    setSaveSorting(sorting);
  }, [dispatch, saveSorting, searchParams, setSearchParams, user]);

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

          <Dropdown title={`Sort by: ${saveSorting.toLocaleLowerCase()}`}>
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
              addBookInCart={() => handleAddBookInCart(user.id, book.id)}
            />

          );
        })}
      </div>

      <Pagination />

    </StyledCatalod>
  );
};

export default Catalog;
