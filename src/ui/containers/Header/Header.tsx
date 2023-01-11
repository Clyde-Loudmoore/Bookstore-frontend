/* eslint-disable no-console */
import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button/Button';
import SearchField from '../../components/InputField/InputField';

import StyledHeader from './StyledHeader.styled';

import SearchIcon from '../../components/InputField/images/search.png';
import Cart from './images/cart.png';
import Heart from './images/heart.png';
import User from './images/user.png';

import { useAppSelector } from '../../../store';

import Logo from './images/logo-header.png';

const Header: React.FC = () => {
  const user = useAppSelector((state) => state.user.user);

  return (
    <StyledHeader>
      <img className="header__logo-image" src={Logo} alt="app-logo" />
      <p className="header__search-title">Catalog</p>

      <SearchField img={SearchIcon} placeholder="Search" />
      {user ? (
        <div className="header__small-button-wrapper">

          {/* <Link className="header__small-button-link" to="singup"> */}
          <Button className="header__small-button" img={Cart} />
          {/* </Link> */}

          {/* <Link className="header__small-button-link" to="singup"> */}
          <Button className="header__small-button" img={Heart} />
          {/* </Link> */}

          <Link className="header__small-button-link" to="profile">
            <Button className="header__small-button" img={User} />
          </Link>

        </div>
      ) : (
        <div className="header__button-wrapper">

          <Link className="header__button-link" to="singup">
            <Button className="header__button" value="Sing Up" />
          </Link>

          <Link className="header__button-link" to="singin">
            <Button className="header__button" value="Sing In" />
          </Link>

        </div>
      )}

    </StyledHeader>
  );
};

export default Header;
