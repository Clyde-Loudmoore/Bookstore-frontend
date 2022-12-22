import HomePageWrapper from './HomePage.styled';

import Castle from './images/castle.png';
import Fairy from './images/tinker-bell.png';

import Button from '../../components/button/Button';

const HomePage = () => {
  return (
    <HomePageWrapper>
      <section className="home-page__catalog" />
      <section className="home-page__banner">
        <img className="home-page__castle-bg" src={Castle} alt="Castle" />
        <div className="home-page__banner-info">
          <h1>Authorize now</h1>
          <p>Authorize now and discover the fabulous world of books</p>
          <Button value="Log In" />
        </div>
        <img src={Fairy} alt="fairy" />
      </section>
    </HomePageWrapper>
  );
};

export default HomePage;
