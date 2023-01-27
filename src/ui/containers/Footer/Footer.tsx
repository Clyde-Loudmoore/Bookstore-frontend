import { Link } from 'react-router-dom';

import api from 'api/api';
import { userSliceActions } from 'store/slises/userSlise';
import { useAppDispatch } from 'store';
import type { UserType } from 'types';

import StyledFooter from './Footer.styled';

import logo from '../../../assets/icons/logo-footer.png';
import map from '../../../assets/icons/map.png';

const Footer: React.FC = () => {
  const dispatch = useAppDispatch();

  const signOut = async () => {
    const currentUser = null as unknown as UserType;
    const token = api.getApiToken('token');

    dispatch(userSliceActions.setUser(currentUser));
    api.removeApiToken(token as unknown as string);
  };

  return (
    <StyledFooter>
      <div className="footer__feedback">

        <Link to="/">
          <img src={logo} alt="app-logo" onClick={signOut} />
        </Link>

        <p>tranthuy.nute@gmail.com</p>
        <p>(480) 555-0103</p>
      </div>

      <div className="footer__map">
        <Link className="footer__link" to="/">
          <p>Home Page</p>
        </Link>

        <Link className="footer__link" to="catalog">
          <p>Catalog</p>
        </Link>

        <Link className="footer__link" to="profile">
          <p>My Account</p>
        </Link>

        <Link className="footer__link" to="#">
          <p>Cart</p>
        </Link>
      </div>

      <div className="footer__location">
        <p>6391 Elgin St. Celina, Delaware 10299</p>
        <img src={map} alt="map" />
      </div>
    </StyledFooter>
  );
};

export default Footer;
