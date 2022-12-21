import HeaderWrapper from './Header.styled';
import Logo from './images/logo-header.png';
import Search from './images/Search.png';
import Button from '../../components/button/Button';

const Header = () => {
  return (
    <HeaderWrapper>
      <img className="header__logo-image" src={Logo} alt="app-logo" />
      <p className="header__search-title">Catalog</p>
      <div className="header__search-field">
        <div className="search__field-icon">
          <img src={Search} alt="search" />
        </div>
        <div>
          <input className="search__input" name="catalog" type="text" placeholder="Search" />
        </div>
      </div>

      <Button value="Log In/ Sing Up" />
    </HeaderWrapper>
  );
};

export default Header;
