import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Loading from '../components/Loading';

const HomePage = React.lazy(() => import('../pages/HomePage/HomePage'));
const SingUp = React.lazy(() => import('../pages/SingUp'));
const SingIn = React.lazy(() => import('../pages/SingIn'));
const Profile = React.lazy(() => import('../pages/Profile/ProfileUser'));

const Navigation = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/singin" element={<SingIn />} />
        <Route path="/singup" element={<SingUp />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Suspense>
  );
};

export default Navigation;
