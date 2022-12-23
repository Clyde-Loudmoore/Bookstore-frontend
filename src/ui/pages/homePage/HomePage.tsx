import { Link } from 'react-router-dom';

import HeaderBanner from './HeaderBanner.styled';
import FooterBanner from './FooterBanner.styled';

import Castle from './images/castle.png';
import Reader from './images/reader.png';

import Button from '../../components/button/Button';

const HomePage = () => {
  return (
    <main>

      <HeaderBanner>
        <div className="header-banner__info">
          <h1 className="header-banner__header">Build your library with us</h1>
          <div className="paragraph-wrapper">
            <p>Buy two books and get one for free</p>
          </div>
          {/* <Link to="login"> */}
          <Button className="header-banner__button" value="Choose a book" />
          {/* </Link> */}
        </div>
        <div className="header-banner__reader-wrapper">
          <img className="header-banner__reader" src={Reader} alt="Reader" />
        </div>
      </HeaderBanner>

      <section className="home-page__catalog" />

      <FooterBanner>
        <div className="footer-banner__castle-wrapper">
          <img className="footer-banner__castle" src={Castle} alt="Castle" />
        </div>
        <div className="footer-banner__info">
          <h1 className="footer-banner__header">Authorize now</h1>
          <p>Authorize now and discover the fabulous world of books</p>
          <div className="footer-banner__button-wrapper">
            <Link to="login">
              <Button className="footer-banner__button" value="Log In" />
            </Link>
            <Link to="singup">
              <Button className="footer-banner__button" value="Sing Up" />
            </Link>
          </div>
        </div>
      </FooterBanner>
    </main>
  );
};

export default HomePage;
