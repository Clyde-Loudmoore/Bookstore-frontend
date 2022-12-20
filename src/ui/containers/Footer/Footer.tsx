import FooterWrapper from "./Footer.styled";
import Logo from './images/logo-footer.png'
import Map from './images/map.png'

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="footer__feedback">
        <img src={Logo} alt="app-logo" />
        <p>tranthuy.nute@gmail.com</p>
        <p>(480) 555-0103</p>
      </div>

      <div className="footer__map">
        <ul>
          <li>Home Page</li>
          <li>Catalog</li>
          <li>My Account</li>
          <li>Cart</li>
        </ul>
      </div>

      <div className="footer__location">
        <p>6391 Elgin St. Celina, Delaware 10299</p>
        <img src={Map} alt="map" />
      </div>
    </FooterWrapper>
  )
}

export default Footer