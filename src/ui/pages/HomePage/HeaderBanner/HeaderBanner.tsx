import { Link } from 'react-scroll';

import StyledHeaderBanner from 'src/ui/pages/HomePage/HeaderBanner/HeaderBanner.styled';
import Button from 'src/ui/components/Button';

import reader from 'src/ui/assets/images/reader.png';

const HeaderBanner: React.FC = () => {
  return (
    <StyledHeaderBanner>
      <div className="header-banner__info">
        <h1 className="header-banner__header">Build your library with us</h1>
        <p className="header-banner__paragraph">Buy two books and get one for free</p>

        <Link to="catalog">
          <Button className="header-banner__button">Choose a book</Button>
        </Link>
      </div>
      <div className="header-banner__reader-wrapper">
        <img className="header-banner__reader" src={reader} alt="Reader" />
      </div>
    </StyledHeaderBanner>
  );
};

export default HeaderBanner;
