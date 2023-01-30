import { Link } from 'react-router-dom';

import StyledHeaderBanner from './HeaderBanner.styled';
import FooterBanner from './FooterBanner/FooterBanner';
import Button from '../../components/Button';
import Catalog from './Catalog/Catalog';

import reader from '../../../assets/images/reader.png';

import { useAppSelector } from '../../../store';

const HomePage: React.FC = () => {
  const user = useAppSelector((store) => store.user.user);

  return (
    <main>

      {user
        ? (
          <>
            <StyledHeaderBanner>
              <div className="header-banner__info">
                <h1 className="header-banner__header">Build your library with us</h1>
                <p className="header-banner__paragraph">Buy two books and get one for free</p>

                <Link to="">
                  <Button className="header-banner__button">Choose a book</Button>
                </Link>
              </div>
              <div className="header-banner__reader-wrapper">
                <img className="header-banner__reader" src={reader} alt="Reader" />
              </div>
            </StyledHeaderBanner>
            <Catalog />
          </>
        )
        : (
          <>
            <StyledHeaderBanner>

              <div className="header-banner__info">
                <h1 className="header-banner__header">Build your library with us</h1>
                <p className="header-banner__paragraph">Buy two books and get one for free</p>

                <Link to="">
                  <Button className="header-banner__button">Choose a book</Button>
                </Link>
              </div>
              <div className="header-banner__reader-wrapper">
                <img className="header-banner__reader" src={reader} alt="Reader" />
              </div>

            </StyledHeaderBanner>

            <Catalog />
            <FooterBanner />

          </>
        )
      }

    </main>
  );
};

export default HomePage;
