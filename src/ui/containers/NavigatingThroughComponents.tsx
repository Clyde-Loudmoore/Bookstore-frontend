import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage/HomePage';
import SingUp from '../pages/SingUp';
import SingIn from '../pages/SingIn';
import Profile from '../pages/Profile/ProfileUser';

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/singin" element={<SingIn />} />
      <Route path="/singup" element={<SingUp />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default Navigation;
