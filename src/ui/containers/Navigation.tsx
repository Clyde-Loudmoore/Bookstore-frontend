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

const Navigation = () => {
  const user = useAppSelector((store) => store.user.user);

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path={constants.HOMEPAGE} element={<HomePage />} />

        {!user
          ? (<><Route path={constants.SINGIN} element={<SingIn />} />
            <Route path={constants.SINGUP} element={<SingUp />} />
             </>)
          : (<><Route path={constants.SINGIN} element={<HomePage />} />
            <Route path={constants.SINGUP} element={<HomePage />} />
             </>)
        }
        {user
          ? (<Route path={constants.PROFILE} element={<Profile />} />)
          : (<Route path={constants.PROFILE} element={<HomePage />} />)
        }

        <Route path={constants.CATALOG} element={<HomePage />} />

        <Route path={constants.BOOKS}>
          <Route path={constants.BOOKID} element={<BookPage />} />
        </Route>

      </Routes>
    </Suspense>
  );
};

export default Navigation;
