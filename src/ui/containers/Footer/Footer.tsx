import Logo from './images/logo-footer.png';
import Map from './images/map.png';
import { BGFooter, FooterWrapper } from './Footer.styled';

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

          <p>Home Page</p>
          <p>Catalog</p>
          <p>My Account</p>
          <p>Cart</p>

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
