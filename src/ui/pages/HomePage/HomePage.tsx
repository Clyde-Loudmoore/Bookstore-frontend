import React from 'react';
import { Link } from 'react-router-dom';

import StyledHeaderBanner from './HeaderBanner.styled';
import StyledFooterBanner from './FooterBanner.styled';
import StyledButton from '../../components/Button';
import Catalog from './Catalog/Catalog';

import castle from '../../../assets/images/castle.png';
import reader from '../../../assets/images/reader.png';

import { useAppSelector } from '../../../store';

const HomePage: React.FC = () => {
  const user = useAppSelector((store) => store.user.user);

  return (
    <main>

      {user
        ? (<>
          <StyledHeaderBanner>
            <div className="header-banner__info">
              <h1 className="header-banner__header">Build your library with us</h1>
              <p className="header-banner__paragraph">Buy two books and get one for free</p>

              <Link to="">
                <StyledButton className="header-banner__button">Choose a book</StyledButton>
              </Link>
            </div>
            <div className="header-banner__reader-wrapper">
              <img className="header-banner__reader" src={reader} alt="Reader" />
            </div>
          </StyledHeaderBanner>
          <Catalog />
           </>
        )
        : (<>
          <StyledHeaderBanner>

            <div className="header-banner__info">
              <h1 className="header-banner__header">Build your library with us</h1>
              <p className="header-banner__paragraph">Buy two books and get one for free</p>

              <Link to="">
                <StyledButton className="header-banner__button">Choose a book</StyledButton>
              </Link>
            </div>
            <div className="header-banner__reader-wrapper">
              <img className="header-banner__reader" src={reader} alt="Reader" />
            </div>

          </StyledHeaderBanner>

          <Catalog />

          <StyledFooterBanner>
            <div className="footer-banner__castle-wrapper">
              <img className="footer-banner__castle" src={castle} alt="Castle" />
            </div>

            <div className="footer-banner__info">
              <h1 className="footer-banner__header">Authorize now</h1>
              <p>Authorize now and discover the fabulous world of books</p>

              <div className="footer-banner__button-wrapper">

                <Link className="footer-banner__link" to="singin">
                  <StyledButton className="footer-banner__button">Sing In</StyledButton>
                </Link>
                <Link className="footer-banner__link" to="singup">
                  <StyledButton className="footer-banner__button">Sing Up</StyledButton>
                </Link>

              </div>

            </div>
          </StyledFooterBanner>
           </>)}

    </main>
  );
};

export default HomePage;
