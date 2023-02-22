import React from 'react';
import { ToastContainer } from 'react-toastify';

import { getMe } from 'src/store/thunks/userThunk';
import { useAppDispatch } from 'src/store';
import tokenHelper from 'src/utils/tokenHelper';

import Header from 'src/ui/containers/Header';
import Footer from 'src/ui/containers/Footer';
import Navigation from 'src/ui/containers/Navigation';
import Loading from 'src/ui/components/Loading';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    (async () => {
      const token = tokenHelper.tokenHelper.get();
      if (token) {
        await dispatch(getMe());
      }
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
