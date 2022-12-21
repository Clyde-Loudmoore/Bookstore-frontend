import HeaderWrapper from './Header.styled';
import Logo from './images/logo-header.png';
import Button from '../../components/button/Button';
import SearchField from '../../components/SearchField/SearchField';
import SearchIcon from '../../components/SearchField/images/Search.png';

const Header = () => {
  return (
    <HeaderWrapper>
      <img className="header__logo-image" src={Logo} alt="app-logo" />
      <p className="header__search-title">Catalog</p>

      <SearchField img={SearchIcon} />
      <Button value="Log In/ Sing Up" />

    </HeaderWrapper>
  );
};

export default Header;
