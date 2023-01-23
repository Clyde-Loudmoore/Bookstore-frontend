/* eslint-disable no-console */
import React from 'react';

import Header from './ui/containers/Header';
import Footer from './ui/containers/Footer';

import Navigation from './ui/containers/Navigation';

import { useAppDispatch } from './store';
import { userSliceActions } from './store/userSlise';
import authApi from './api/authApi';

import Loading from './ui/components/Loading';

import { GlobalStyles } from './ui/components/GlobalStyles';

import BookPage from './ui/pages/BookPage';

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
      <Header />
      {/* <BookPage /> */}
      <Navigation />
      <Footer />
    </>
  );
};

export default App;
