import { Link } from 'react-router-dom';

import { BGFooter, FooterWrapper } from './Footer.styled';

import Logo from './images/logo-footer.png';
import Map from './images/map.png';

const Footer = () => {
  return (
    <BGFooter>
      <FooterWrapper>
        <div className="footer__feedback">
          <img src={Logo} alt="app-logo" />
          <p>tranthuy.nute@gmail.com</p>
          <p>(480) 555-0103</p>
        </div>

        <div className="footer__map">

          <Link to="/">
            <p>Home Page</p>
          </Link>
          {/* <Link to="login"> */}
          <p>Catalog</p>
          {/* </Link> */}
          {/* <Link to="login"> */}
          <p>My Account</p>
          {/* </Link> */}
          {/* <Link to="login"> */}
          <p>Cart</p>
          {/* </Link> */}
        </div>

        <div className="footer__location">
          <p>6391 Elgin St. Celina, Delaware 10299</p>
          <img src={Map} alt="map" />
        </div>
      </FooterWrapper>
    </BGFooter>
  );
};

export default Footer;
