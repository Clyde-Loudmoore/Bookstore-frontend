import React from 'react';
import { Link } from 'react-router-dom';

import StyledHeaderBanner from './StyledHeaderBanner.styled';
import StyledFooterBanner from './StyledFooterBanner.styled';

import Button from '../../components/Button/Button';

import Castle from './images/castle.png';
import Reader from './images/reader.png';

import { useAppSelector } from '../../../store';

const HomePage: React.FC = () => {
  const user = useAppSelector((state) => state.user.user);

  return (
    <main>

      {user ? (
        <>
          <StyledHeaderBanner>
            <div className="header-banner__info">
              <h1 className="header-banner__header">Build your library with us</h1>
              <p className="header-banner__paragraph">Buy two books and get one for free</p>

              <Link to="">
                <Button className="header-banner__button" value="Choose a book" />
              </Link>
            </div>
            <div className="header-banner__reader-wrapper">
              <img className="header-banner__reader" src={Reader} alt="Reader" />
            </div>
          </StyledHeaderBanner>
          <section className="home-page__catalog" />
        </>
      ) : (
        <>
          <StyledHeaderBanner>

            <div className="header-banner__info">
              <h1 className="header-banner__header">Build your library with us</h1>
              <p className="header-banner__paragraph">Buy two books and get one for free</p>

              <Link to="">
                <Button className="header-banner__button" value="Choose a book" />
              </Link>
            </div>
            <div className="header-banner__reader-wrapper">
              <img className="header-banner__reader" src={Reader} alt="Reader" />
            </div>

          </StyledHeaderBanner>

          <section className="home-page__catalog" />

          <StyledFooterBanner>
            <div className="footer-banner__castle-wrapper">
              <img className="footer-banner__castle" src={Castle} alt="Castle" />
            </div>

            <div className="footer-banner__info">
              <h1 className="footer-banner__header">Authorize now</h1>
              <p>Authorize now and discover the fabulous world of books</p>

              <div className="footer-banner__button-wrapper">

                <Link className="footer-banner__link" to="singin">
                  <Button className="footer-banner__button" value="Sing In" />
                </Link>
                <Link className="footer-banner__link" to="singup">
                  <Button className="footer-banner__button" value="Sing Up" />
                </Link>

              </div>

            </div>
          </StyledFooterBanner>
        </>
      )}

    </main>
  );
};

export default HomePage;
