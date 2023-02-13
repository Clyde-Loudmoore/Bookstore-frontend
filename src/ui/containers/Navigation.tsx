import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { useAppSelector } from 'store';

import Loading from '../components/Loading';

import constants from '../../utils/constants';

const HomePage = React.lazy(() => import('../pages/HomePage/HomePage'));
const SingUp = React.lazy(() => import('../pages/SingUp'));
const SingIn = React.lazy(() => import('../pages/SingIn'));
const Profile = React.lazy(() => import('../pages/Profile/ProfileUser'));
const BookPage = React.lazy(() => import('../pages/BookPage'));
const Cart = React.lazy(() => import('../pages/Cart'));
const FavoritesPage = React.lazy(() => import('../pages/FaforitesPage'));

const Navigation: React.FC = () => {
  const user = useAppSelector((store) => store.user.user);

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path={constants.ROUTE_PATHS.HOME_PAGE} element={<HomePage />} />
        <Route path={constants.ROUTE_PATHS.CATALOG} element={<HomePage />} />
        <Route path={constants.ROUTE_PATHS.SING_IN} element={<SingIn />} />
        <Route path={constants.ROUTE_PATHS.SING_UP} element={<SingUp />} />
        <Route path={`${constants.ROUTE_PATHS.BOOKS}/${constants.ROUTE_PATHS.BOOK_ID}`} element={<BookPage />} />

        {user
          ? (
            <>
              (
              <Route path={constants.ROUTE_PATHS.PROFILE} element={<Profile />} />
              <Route path={constants.ROUTE_PATHS.CART} element={<Cart />} />
              <Route path={constants.ROUTE_PATHS.FAVORITES} element={<FavoritesPage />} />
              )
            </>
          )
          : (
            <>
              (<Route path={constants.ROUTE_PATHS.PROFILE} element={<HomePage />} />)
            </>
          )}

      </Routes>
    </Suspense>
  );
};

export default Navigation;
