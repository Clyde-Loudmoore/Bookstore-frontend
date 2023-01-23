/* eslint-disable no-console */
import React from 'react';
import { ToastContainer } from 'react-toastify';

import Header from './ui/containers/Header';
import Footer from './ui/containers/Footer';

import Navigation from './ui/containers/Navigation';
import Loading from './ui/components/Loading';
import { GlobalStyles } from './ui/components/GlobalStyles';

import { useAppDispatch } from './store';
import { userSliceActions } from './store/Slise/userSlise';
import authApi from './api/authApi';

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    (async () => {
      const response = await authApi.getUser();

      dispatch(userSliceActions.setUser(response.data.user));
      setIsLoading(false);
    })();
  }, [dispatch]);

  // if (isLoading) {
  //   return <Loading />;
  // }

  return (
    <>
      <GlobalStyles />
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Header />
      <Navigation />
      <Footer />
    </>
  );
};

export default App;
