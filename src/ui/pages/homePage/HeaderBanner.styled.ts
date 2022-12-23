import styled from 'styled-components';
import Books from './images/booksBG.png';
import Books2 from './images/booksBG2.png';

const HeaderBanner = styled.section`
  width: 100%;
  height: 400px;

  background-color: #F0F4EF;
  margin: 0 0 110px 0;
  border-radius: 16px;
  background-image: url(${Books});
  background-repeat: no-repeat;
  background-position: left 0 top 135px;
  display: flex;
  justify-content: space-around;
  align-items: center;

.header-banner__header{
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  margin: 0 0 10px 0;
}

.paragraph-wrapper{
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #344966;
  width: 210px;
  margin: 0 0 50px 0;
}

.header-banner__reader-wrapper{
  position: relative;
}

.header-banner__reader{
  position: absolute;
  top: -200px;
  left: -310px;
}

@media (min-width: 834px) and (max-width: 1439px) {
  min-width: 804px;
  height: 289px;

  background-image: url(${Books2});
  background-size: 361px 128px contain;
  background-position: left 0 top 80px;

  justify-content: space-between;

.header-banner__info{
  padding-left: 40px;
}

.header-banner__header{
  font-size: 32px;
  line-height: 48px;
  margin: 0 0 15px 0;
}

.paragraph-wrapper{
  font-size: 16px;
  line-height:24px;
  width: 210px;
  margin: 0 0 40px 0;
}

.header-banner__button{
  max-width:230px;
  width: 100%;
  height: 44px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
}

.header-banner__reader{
  max-width: 328px;
  height: 364px;
  position: absolute;
  top: -220px;
  left: -340px;
}
}

@media (min-width: 320px) and (max-width: 833px) {
  min-width: 290px;
  height: 505px;

  padding-top: -6px;

  background-image: url(${Books2});
  background-size: 232px 140px;
  background-position: left 70px top 15px;

  flex-direction: column;
  justify-content: space-between;

.header-banner__info{
  padding: 20px 0 0 0;
}

.header-banner__header{
  font-size: 18px;
  line-height: 27px;
  margin: 0 0 20px 0;
}

.paragraph-wrapper{
  font-size: 14px;
  line-height:21px;
  width: 220px;
  margin: 0 35px 20px 0;
}

.header-banner__button{
  max-width:200px;
  width: 100%;
  height: 38px;
  font-size: 12px;
  line-height: 18px;
}

.header-banner__reader{
  max-width: 253px;
  height: 282px;
  position: absolute;
  top: -282px;
  left: -125px;
}

}

`;

export default HeaderBanner;
