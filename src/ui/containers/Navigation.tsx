import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Loading from '../components/Loading';
import constants from '../../utils/constants';

const HomePage = React.lazy(() => import('../pages/HomePage/HomePage'));
const SingUp = React.lazy(() => import('../pages/SingUp'));
const SingIn = React.lazy(() => import('../pages/SingIn'));
const Profile = React.lazy(() => import('../pages/Profile/ProfileUser'));
const BookPage = React.lazy(() => import('../pages/BookPage'));

const Navigation = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path={constants.HOMEPAGE} element={<HomePage />} />
        <Route path={constants.SINGIN} element={<SingIn />} />
        <Route path={constants.SINGUP} element={<SingUp />} />
        <Route path={constants.PROFILE} element={<Profile />} />
        <Route path={constants.CATALOG} element={<HomePage />} />
        <Route path={constants.BOOKPAGE} element={<BookPage />} />
      </Routes>
    </Suspense>
  );
};

export default Navigation;
