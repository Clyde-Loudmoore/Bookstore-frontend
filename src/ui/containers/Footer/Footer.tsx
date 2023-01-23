import { Link } from 'react-router-dom';

import StyledFooter from './Footer.styled';

import logo from '../../../assets/icons/logo-footer.png';
import map from '../../../assets/icons/map.png';

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer__feedback">
        <img src={logo} alt="app-logo" />
        <p>tranthuy.nute@gmail.com</p>
        <p>(480) 555-0103</p>
      </div>

      <div className="footer__map">
        <Link className="footer__link" to="/">
          <p>Home Page</p>
        </Link>

        <Link className="footer__link" to="catalog">
          <p>Catalog</p>
        </Link>

        <Link className="footer__link" to="profile">
          <p>My Account</p>
        </Link>

        <Link className="footer__link" to="#">
          <p>Cart</p>
        </Link>
      </div>

      <div className="footer__location">
        <p>6391 Elgin St. Celina, Delaware 10299</p>
        <img src={map} alt="map" />
      </div>
    </StyledFooter>
  );
};

export default Footer;
