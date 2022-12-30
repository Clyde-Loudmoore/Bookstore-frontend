import Header from './ui/containers/Header';
import Footer from './ui/containers/Footer';
import Navigation from './ui/containers/NavigatingThroughComponents';

import AppContainer, { GlobalStyles } from './App.styled';

const App = () => {
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
