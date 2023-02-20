import { Link } from 'react-router-dom';

import StyledFooterBanner from 'src/ui/pages/HomePage/FooterBanner/FooterBanner.styled';
import Button from 'src/ui/components/Button';

import castle from 'src/ui/assets/images/castle.png';

type PropsType = {
  className?: string;
};

const FooterBanner: React.FC<PropsType> = (props) => {
  return (
    <StyledFooterBanner className={props.className}>
      <div className="footer-banner__castle-wrapper">
        <img className="footer-banner__castle" src={castle} alt="Castle" />
      </div>

      <div className="footer-banner__info">
        <h1 className="footer-banner__header">Authorize now</h1>
        <p>Authorize now and discover the fabulous world of books</p>

        <div className="footer-banner__button-wrapper">

          <Link className="footer-banner__link" to="/sing-in">
            <Button className="footer-banner__button">Sing In</Button>
          </Link>
          <Link className="footer-banner__link" to="/sing-up">
            <Button className="footer-banner__button">Sing Up</Button>
          </Link>

        </div>

      </div>
    </StyledFooterBanner>
  );
};

export default FooterBanner;
