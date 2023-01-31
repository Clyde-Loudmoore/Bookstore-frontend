import { Link } from 'react-router-dom';

import api from 'api/api';
import { userSliceActions } from 'store/slises/userSlise';
import type { UserType } from 'types';
import { useAppSelector, useAppDispatch } from 'store';

import Button from '../../components/Button';
import SearchField from '../../components/InputField';
import StyledHeader from './Header.styled';

import searchIcon from '../../../assets/icons/search.png';
import cart from '../../../assets/icons/cart.png';
import heart from '../../../assets/icons/hideHeart.png';
import man from '../../../assets/icons/man.png';
import logo from '../../../assets/icons/logo-header.png';

const Header: React.FC = () => {
  const user = useAppSelector((state) => state.user.user);

  const dispatch = useAppDispatch();

  const signOut = async () => {
    const currentUser = null as unknown as UserType;
    const token = api.getApiToken('token');

    dispatch(userSliceActions.setUser(currentUser));
    api.removeApiToken(token as unknown as string);
  };

  return (
    <StyledHeader>
      <Link to="/">
        <img className="header__logo-image" src={logo} alt="App logo" onClick={signOut} />
      </Link>

      <p className="header__search-title">Catalog</p>

      <SearchField img={searchIcon} placeholder="Search" />
      {user
        ? (
          <div className="header__small-button-wrapper">

            <Link className="header__small-button-link" to="/cart">
              <Button className="header__small-button"><img src={cart} /></Button>
            </Link>

            <Link className="header__small-button-link" to="#">
              <Button className="header__small-button"><img src={heart} /></Button>
            </Link>

            <Link className="header__small-button-link" to="profile">
              <Button className="header__small-button"><img src={man} /></Button>
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
