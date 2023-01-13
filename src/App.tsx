/* eslint-disable no-console */
import React, { useEffect } from 'react';

import Header from './ui/containers/Header';
import Footer from './ui/containers/Footer';

import Navigation from './ui/containers/NavigatingThroughComponents';

import { useAppDispatch } from './store';
import { getMe } from './store/userSlise';
import { getUser } from './api/authApi';

// import Loading from './ui/components/Loading';

import AppContainer, { GlobalStyles } from './App.styled';

const App = () => {
  // const [loading, setLoading] = React.useState(true);

  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const user = await getUser();
      dispatch(getMe(user.data.user));
      // setLoading(false);
    })();
  }, [dispatch]);

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <AppContainer>
      <GlobalStyles />
      <Header />
      <Navigation />
      <Footer />
    </AppContainer>
  );
};

export default App;
