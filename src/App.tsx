import Header from './ui/containers/Header/Header';
import Footer from './ui/containers/Footer/Footer';
import ContentWrapper from './ui/components/contentWrapper/Wrapper.styled';

import Navigation from './ui/components/ComponentWithNavigation';

import AppContainer from './App.styled';

const App = () => {
  return (
    <AppContainer>
      <ContentWrapper>
        <Header />
        <Navigation />
      </ContentWrapper>
      <Footer />
    </AppContainer>
  );
};

export default App;
