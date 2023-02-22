import React from 'react';
import type { ChangeEvent } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import tokenHelper from 'src/utils/tokenHelper';
import { userSliceActions } from 'src/store/slises/userSlise';
import type { UserType } from 'src/types';
import { useAppSelector, useAppDispatch } from 'src/store';
import { useDebounce } from 'src/hooks';

import cartThunk from 'src/store/thunks/cartThunk';
import bookThunk from 'src/store/thunks/bookThunk';

import Button from 'src/ui/components/Button';
import SearchField from 'src/ui/components/InputField';
import StyledHeader from 'src/ui/containers/Header/Header.styled';

import searchIcon from 'src/ui/assets/icons/search.png';
import cartIcon from 'src/ui/assets/icons/cart.png';
import heartIcon from 'src/ui/assets/icons/hideHeart.png';
import manIcon from 'src/ui/assets/icons/man.png';
import logoIcon from 'src/ui/assets/icons/logo-header.png';

const Header: React.FC = () => {
  const [filter, setFilter] = React.useState<string>('');

  const [searchParams, setSearchParams] = useSearchParams();

  const debouncedFilter = useDebounce(filter, 1500);

  const user = useAppSelector((store) => store.user.user) as UserType;
  const cart = useAppSelector((store) => store.books.cart);
  const likedBooks = useAppSelector((store) => store.books.likedBooks);

  const dispatch = useAppDispatch();

  const signOut = async () => {
    const currentUser = null as unknown as UserType;
    const token = tokenHelper.getApiToken('token');

    dispatch(userSliceActions.setUser(currentUser));
    tokenHelper.removeApiToken(token as unknown as string);
  };

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  React.useEffect(() => {
    dispatch(cartThunk.getCart(user.id));
    dispatch(bookThunk.getLikedBooks(user.id));

    if (debouncedFilter) {
      searchParams.set('search', debouncedFilter as string);
    } else {
      searchParams.delete('search');
    }
    setSearchParams(searchParams);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedFilter]);

  return (
    <StyledHeader>
      <Link to="/">
        <img className="header__logo-image" src={logoIcon} alt="App logo" />
      </Link>

      <Link className="sing-out" to="/">
        <p className="header__search-title" onClick={signOut}>Catalog</p>
      </Link>

      <SearchField
        className="search__input-field"
        img={searchIcon}
        placeholder="Search"
        label="Search"
        onChange={handleChangeSearch}
      />
      {
        user
          ? (
            <div className="header__small-button-wrapper">

              <Link className="header__small-button-link" to="/cart">
                <Button className="header__small-button">
                  <img src={cartIcon} />
                  <div className="items">
                    {cart?.length}
                  </div>
                </Button>
              </Link>

              <Link className="header__small-button-link" to="/favorites">
                <Button className="header__small-button">
                  <img src={heartIcon} />
                  <div className="items">
                    {likedBooks?.length}
                  </div>
                </Button>
              </Link>

              <Link className="header__small-button-link" to="/profile">
                <Button className="header__small-button"><img src={manIcon} /></Button>
              </Link>

            </div>
          )
          : (
            <div className="header__button-wrapper">

              <Link className="header__button-link" to="/sing-up">
                <Button className="header__button">Sing Up</Button>
              </Link>

              <Link className="header__button-link" to="/sing-in">
                <Button className="header__button">Sing In</Button>
              </Link>

            </div>
          )
      }
    </StyledHeader >
  );
};

export default Header;
