import HeaderWrapper from './Header.styled';
import Logo from './images/logo-header.png';
import Button from '../../components/button/Button';
import SearchField from '../../components/SearchField/SearchField';

const Header = () => {
  return (
    <HeaderWrapper>
      <img className="header__logo-image" src={Logo} alt="app-logo" />
      <p className="header__search-title">Catalog</p>

      <SearchField />
      <Button value="Log In/ Sing Up" />

    </HeaderWrapper>
  );
};

export default Header;
