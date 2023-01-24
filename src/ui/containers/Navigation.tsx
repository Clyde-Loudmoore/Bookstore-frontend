import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { useAppSelector } from 'store';

import Loading from '../components/Loading';

import { ROUTE_PATHS } from '../../utils/constants';

const HomePage = React.lazy(() => import('../pages/HomePage/HomePage'));
const SingUp = React.lazy(() => import('../pages/SingUp'));
const SingIn = React.lazy(() => import('../pages/SingIn'));
const Profile = React.lazy(() => import('../pages/Profile/ProfileUser'));
const BookPage = React.lazy(() => import('../pages/BookPage'));

const Navigation = () => {
  const user = useAppSelector((store) => store.user.user);

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path={ROUTE_PATHS.HOME_PAGE} element={<HomePage />} />
        <Route path={ROUTE_PATHS.CATALOG} element={<HomePage />} />
        <Route path={ROUTE_PATHS.SING_IN} element={<SingIn />} />
        <Route path={ROUTE_PATHS.SING_UP} element={<SingUp />} />
        <Route path={`${ROUTE_PATHS.BOOKS}/${ROUTE_PATHS.BOOK_ID}`} element={<BookPage />} />

        {user
          ? (
            <>
              (<Route path={ROUTE_PATHS.PROFILE} element={<Profile />} />)
            </>
          )
          : (
            <>
              (<Route path={ROUTE_PATHS.PROFILE} element={<HomePage />} />)
            </>
          )}

      </Routes>
    </Suspense>
  );
};

export default Navigation;
