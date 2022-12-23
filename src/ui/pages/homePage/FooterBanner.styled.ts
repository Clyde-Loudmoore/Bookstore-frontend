import styled from 'styled-components';
import Fairy from './images/tinker-bell.png';
import Fairy2 from './images/tinker-bell2.png';
import Fairy3 from './images/tinker-bell3.png';

const FooterBanner = styled.section`
  width: 100%;
  height: 400px;

  background-color: #F0F4EF;
  margin: 97px 0 150px 0;
  border-radius: 16px;
  background-image: url(${Fairy});
  background-repeat: no-repeat;
  background-position: left 817px top -60px;
  background-size: 478px 759px contain ;
  display: flex;

.footer-banner__castle-wrapper{
  max-width: 521px;
  width: 100%;
  height: 462px;
  position: relative;
}

.footer-banner__castle{
  width: 100%;
  position: absolute;
  left: 108px;
  top: -62px;
}

.footer-banner__info{
  padding: 80px 100px 0 236px;
  display: flex;
  flex-direction: column;
}

.footer-banner__header{
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  margin:  0 0 10px 0;
}

.footer-banner__info p{
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  margin: 0 0 50px 0;
}

.footer-banner__button-wrapper{
  max-width: 400px;
  width: 100%;
  display: flex;
  justify-content: space-around;
}

a{
  max-width: 167px;
  width: 100%;
}

@media (min-width: 834px) and (max-width: 1439px) {
  min-width: 803px;
  background-image: url(${Fairy2});
  background-repeat: no-repeat;
  background-position: left 475px top -60px;
  background-size: 478px 759px contain ;
  justify-content: space-between;

.footer-banner__castle-wrapper{
  max-width: 389px;
  height: 354px;
  position: relative;
}
  
.footer-banner__castle{
  left: 1px;
  top: 55px;
}

.footer-banner__info{
  padding: 80px 16px 0 21px;
}

.footer-banner__header{
  font-size: 32px;
  line-height: 48px;
  margin:  0 0 22px 0;
}

.footer-banner__info p{
  font-size: 16px;
  line-height: 24px;
  margin: 0 0 40px 0;
}

}

@media (min-width: 320px) and (max-width: 833px) {
  margin: 75px 0 70px 0;
  min-width: 289px;
  height: 501px;
  background-image: url(${Fairy3});
  background-repeat: no-repeat;
  background-position: left 93px top 1px;
  background-size: 478px 759px contain ;
  flex-direction: column-reverse;

.footer-banner__castle-wrapper{
  max-width: 282px;
  height: 250px;
  position: relative;
}

.footer-banner__castle{
  left: 1px;
  top: -1px;
}

.footer-banner__info{
  padding: 20px 10px 87px 20px;
}

.footer-banner__header{
  font-size: 18px;
  line-height: 27px;
  margin:  0 0 20px 0;
}

.footer-banner__info p{
  font-size: 14px;
  line-height: 21px;
  margin: 0 0 20px 0;
}

}
`;

export default FooterBanner;
