import { Link } from 'react-router-dom';

import HeaderWrapper from './Header.styled';

import Button from '../../components/button/Button';
import SearchField from '../../components/SearchField/SearchField';
import SearchIcon from '../../components/SearchField/images/Search.png';

import Logo from './images/logo-header.png';

const Header = () => {
  return (
    <HeaderWrapper>
      <img className="header__logo-image" src={Logo} alt="app-logo" />
      <p className="header__search-title">Catalog</p>

      <SearchField img={SearchIcon} placeholder="Search" />
      <Link to="login">
        <Button className="header__button" value="Log In" />
      </Link>
      <Link to="singup">
        <Button className="header__button" value="Syng Up" />
      </Link>
    </HeaderWrapper>
  );
};

export default Header;
