import { Link } from 'react-scroll';

import StyledFooter from 'src/ui/containers/Footer/Footer.styled';

import logo from 'src/ui/assets/icons/logo-footer.png';
import map from 'src/ui/assets/icons/map.png';

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <div className="footer__feedback">

        <a href="/">
          <img src={logo} alt="app-logo" />
        </a>

        <p>tranthuy.nute@gmail.com</p>
        <p>(480) 555-0103</p>
      </div>

      <div className="footer__map">
        <a className="footer__link" href="/">
          <p>Home Page</p>
        </a>

        <Link className="footer__link" to="catalog">
          <p>Catalog</p>
        </Link>

        <a className="footer__link" href="/profile">
          <p>My Account</p>
        </a>

        <a className="footer__link"href="/cart">
          <p>Cart</p>
        </a>
      </div>

      <div className="footer__location">
        <p>6391 Elgin St. Celina, Delaware 10299</p>
        <img src={map} alt="map" />
      </div>
    </StyledFooter>
  );
};

export default Footer;
