import React from 'react';
import { ToastContainer } from 'react-toastify';

import Header from './ui/containers/Header';
import Footer from './ui/containers/Footer';

import Navigation from './ui/containers/Navigation';
import Loading from './ui/components/Loading';

import { getMe } from './store/thunks/userThunk';
import { useAppDispatch } from './store';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    (async () => {
      await dispatch(getMe());
      setIsLoading(false);
    })();
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={9000}
      />
      <Header />
      <Navigation />
      <Footer />
    </>
  );
};

export default App;
