import styled from 'styled-components';
import Books from './images/booksBG.png';
import Books2 from './images/booksBG2.png';

const StyledHeaderBanner = styled.section`
  margin: 0 80px 110px 80px;
  padding: 80px 108px 96px 108px;
  background-color: #F0F4EF;
  border-radius: 16px;
  
  background-image: url(${Books});
  background-repeat: no-repeat;
  background-position: left 0 top 135px;
  
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header-banner__header {
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    margin: 0 0 10px 0;
  }

  .header-banner__paragraph {
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #344966;
    width: 210px;
    margin: 0 0 50px 0;
  }

  .header-banner__reader-wrapper {
    position: relative;
  }

  .header-banner__reader {
    position: absolute;
    top: -192px;
    left: -398px;
  }

  .header-banner__button {
    max-width: 230px;
  }

  @media (max-width: 1250px) {
    margin: 0 15px 61px 15px;
    padding: 45px 40px 49px 40px;
    background-position: left 0 top 53px;
    
    .header-banner__reader {
      max-width: 328px;
      min-height: 364px;
      top: -203px;
      left: -388px;
    }
  }

  @media (max-width: 975px) {
    .header-banner__header {
      font-size: 32px;
      line-height: 48px;
      margin: 0 0 15px 0;
    }

    .header-banner__paragraph {
      font-size: 16px;
      line-height: 24px;
      width: 217px;
      margin: 0 0 40px 0;
    }

    .header-banner__reader {
      max-width: 253px;
      min-height: 282px;
      top: -136px;
      left: -234px;
    }
  }

  @media (max-width: 735px) {
    background-position: left 0 top 70px;

    .header-banner__header {
      max-width: 300px;
    }

    .header-banner__reader {
      max-width: 253px;
      min-height: 282px;
      top: -113px;
      left: -234px;
    }
  }

  @media (max-width: 667px) {
    background-image: url(${Books2});
    background-position: left 0 top 28px;

    .header-banner__header {
      font-size: 18px;
      line-height: 27px;
      margin: 0 0 20px 0;
    }

    .header-banner__paragraph {
      font-size: 14px;
      line-height: 21px;
      margin: 0 0 20px 0;
    }

    .header-banner__button {
      max-width: 200px;
      padding: 10px;
      font-size:12px;
      line-height:18px;
    }

    .header-banner__reader {
      max-width: 223px;
      min-height: 252px;
      top: -130px;
      left: -204px;
    }
  }

  @media (max-width: 570px) {
    background-position: left 40px top 17px;
    padding: 20px 19px 313px 18px;
    flex-direction: column;
    
    .header-banner__reader {
      max-width: 253px;
      min-height: 282px;
      top: 30px;
      left: -26px;
    }
  }
  
  @media (max-width: 525px) {
    background-size: 232px 140px;

    .header-banner__reader {
      max-width: 253px;
      min-height: 282px;
      top: 30px;
      left: -128px;
    }
  }
`;

export default StyledHeaderBanner;
