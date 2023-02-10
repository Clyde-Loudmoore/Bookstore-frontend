import React from 'react';
import type { ChangeEvent } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import api from 'api/api';
import { userSliceActions } from 'store/slises/userSlise';
import type { UserType } from 'types';
import { useAppSelector, useAppDispatch } from 'store';

import { useDebounce } from 'hooks';

import Button from '../../components/Button';
import SearchField from '../../components/InputField';
import StyledHeader from './Header.styled';

import searchIcon from '../../assets/icons/search.png';
import cartIcon from '../../assets/icons/cart.png';
import heartIcon from '../../assets/icons/hideHeart.png';
import manIcon from '../../assets/icons/man.png';
import logoIcon from '../../assets/icons/logo-header.png';

const Header: React.FC = () => {
  const [filter, setFilter] = React.useState<string>('');
  const [searchParams, setSearchParams] = useSearchParams();

  const debouncedFilter = useDebounce(filter, 1500);

  const cart = useAppSelector((store) => store.books.cart);
  const user = useAppSelector((store) => store.user.user);

  const dispatch = useAppDispatch();

  const signOut = async () => {
    const currentUser = null as unknown as UserType;
    const token = api.getApiToken('token');

    dispatch(userSliceActions.setUser(currentUser));
    api.removeApiToken(token as unknown as string);
  };

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  React.useEffect(() => {
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
        <img className="header__logo-image" src={logoIcon} alt="App logo" onClick={signOut} />
      </Link>

      <p className="header__search-title">Catalog</p>

      <SearchField
        className="search__input-field"
        img={searchIcon}
        placeholder="Search"
        label="Search"
        onChange={handleChangeSearch}
      />
      {user
        ? (
          <div className="header__small-button-wrapper">

            <Link className="header__small-button-link" to="/cart">
              <Button className="header__small-button">
                <img src={cartIcon} />
                <div className="cart-items">
                  {cart!.length}
                </div>
              </Button>
            </Link>

            <Link className="header__small-button-link" to="#">
              <Button className="header__small-button"><img src={heartIcon} /></Button>
            </Link>

            <Link className="header__small-button-link" to="profile">
              <Button className="header__small-button"><img src={manIcon} /></Button>
            </Link>

          </div>
        )
        : (
          <div className="header__button-wrapper">

            <Link className="header__button-link" to="sing-up">
              <Button className="header__button">Sing Up</Button>
            </Link>

            <Link className="header__button-link" to="sing-in">
              <Button className="header__button">Sing In</Button>
            </Link>

          </div>
        )}
    </StyledHeader>
  );
};

export default Header;
