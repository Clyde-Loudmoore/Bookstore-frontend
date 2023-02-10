import styled from 'styled-components';
import Fairy from '../../../assets/images/tinker-bell.png';
import Fairy2 from '../../../assets/images/tinker-bell2.png';
import Fairy3 from '../../../assets/images/tinker-bell3.png';

const StyledFooterBanner = styled.section`
  margin:  0 80px 150px 80px;
  padding: 80px 108px 96px 108px;
  background-color: #F0F4EF;
  border-radius: 16px;

  background-image: url(${Fairy});
  background-repeat: no-repeat;
  background-position: right 0 top -60px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .footer-banner__castle-wrapper {
    position: relative;
  }

  .footer-banner__castle {
    position: absolute;
    left: 0;
    top: -253px;
  }

  .footer-banner__info {
    display: flex;
    flex-direction: column;
  }

  .footer-banner__header {
    font-weight: ${(props) => props.theme.font_weight.large};
    font-size: ${(props) => props.theme.font_size.fs40};
    line-height: ${(props) => props.theme.line_height.lh60};
    margin:  0 0 10px 0;
  }

  .footer-banner__info p {
    font-weight: ${(props) => props.theme.font_weight.medium};
    font-size: ${(props) => props.theme.font_size.fs20};
    line-height: ${(props) => props.theme.line_height.lh30};
    margin: 0 0 50px 0;
    max-width: 415px;
  }

  .footer-banner__button-wrapper {
    max-width: 400px;
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  .footer-banner__link {
    max-width: 167px;
    width: 100%;
  }

  @media (max-width: 1350px) {
    .footer-banner__header {
      font-size: ${(props) => props.theme.font_size.fs32};
      line-height: ${(props) => props.theme.line_height.lh48};
      margin:  0 0 22px 0;
    }

    .footer-banner__info p {
      font-size: ${(props) => props.theme.font_size.fs16};
      line-height: ${(props) => props.theme.line_height.lh24};
      margin: 0 0 40px 0;
    }

    .footer-banner__castle {
      max-width: 389px;
      max-height: 345px;
      left: 0;
      top: -148px;
    }
  }

  @media (max-width: 1250px) {
    background-image: url(${Fairy2});
    padding: 80px 156px 118px 0;
    margin:  0 15px 100px 16px;

    .footer-banner__castle {
      left: 0;
      top: -126px;
    }
  }

  @media (max-width: 1040px) {
    .footer-banner__castle {
      max-width: 339px;
      max-height: 295px;
      left: 0;
      top: -77px;
    }
  }

  @media (max-width: 975px) {
    background-position: right 0 top -60px;
    padding-right: 20px;

    .footer-banner__castle {
      left: 0;
      top: -75px;
    }
  }

  @media (max-width: 820px) {
    .footer-banner__castle {
      max-width: 279px;
      max-height: 235px;
      left: 0;
      top: -17px;
    }
  }

  @media (max-width: 750px) {
    .footer-banner__castle {
      max-width: 229px;
      max-height: 185px;
      left: 0;
      top: 33px;
    }
  }
  
  @media (max-width: 668px) {
    padding: 20px 38px 349px 20px;
    background-image: url(${Fairy3});
    background-position: right 0 top 0;
    flex-direction: column;
    align-items: center;

    .footer-banner__info {
      align-items: center;
    }

    .footer-banner__header {
      font-size: ${(props) => props.theme.font_size.fs18};
      line-height: ${(props) => props.theme.line_height.lh27};
      margin:  0 0 20px 0;
    }

    .footer-banner__info p {
      font-size: ${(props) => props.theme.font_size.fs14};
      line-height: ${(props) => props.theme.line_height.lh21};
      margin: 0 0 20px 0;
    }

    .footer-banner__castle {
      max-width: 282px;
      max-height: 250px;
      left: -140px;
      top: 230px;
    }
  }

  @media (max-width: 513px) {
    align-items: flex-start;

    .footer-banner__info p {
      text-align: center;
    }

    .footer-banner__castle {
      max-width: 252px;
      left: -20px;
      top: 258px;
    }
  }

  @media (max-width: 497px) {
    .footer-banner__castle {
      left: -20px;
      top: 278px;
    }
  }

  @media (max-width: 440px) {
    .footer-banner__info p {
      text-align: left;
    }

    .footer-banner__link {
      max-width: 100px;
      }

    .footer-banner__button{
      padding: 3px;
      width: 100%;
    }

    .footer-banner__castle {
      max-width: 252px;
      left: -20px;
      top: 265px;
    }
  }
`;

export default StyledFooterBanner;
