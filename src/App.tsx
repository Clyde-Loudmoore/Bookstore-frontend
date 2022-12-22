// import { Route, Routes, Router } from 'react-router-dom';
import AppContainer from './App.styled';
import Header from './ui/containers/Header/Header';
import Footer from './ui/containers/Footer/Footer';
import ContentWrapper from './ui/components/contentWrapper/Wrapper.styled';
import SingUp from './ui/pages/singUp/SingUp';
// import LogIn from './ui/pages/logIn/LogIn';

const App = () => {
  return (
    <AppContainer>
      <ContentWrapper>
        <Header />
        <SingUp />
        {/* <LogIn /> */}
      </ContentWrapper>
      <Footer />
    </AppContainer>
  );
};

export default App;
