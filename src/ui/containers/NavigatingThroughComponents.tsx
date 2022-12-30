import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage/HomePage';
import SingUp from '../pages/singUp/SingUp';
import LogIn from '../pages/SingIn/SingIn';

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/singup" element={<SingUp />} />
    </Routes>
  );
};

export default Navigation;
