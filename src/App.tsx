import AppContainer from './App.styled';
import Header from './ui/containers/Header/Header';
import Footer from './ui/containers/Footer/Footer';
import ContentWrapper from './ui/components/contentWrapper/Wrapper.styled';

function App() {
  return (
    <AppContainer>
      <ContentWrapper>
        <Header />
      </ContentWrapper>
      <Footer />
    </AppContainer>
  );
}

export default App;
