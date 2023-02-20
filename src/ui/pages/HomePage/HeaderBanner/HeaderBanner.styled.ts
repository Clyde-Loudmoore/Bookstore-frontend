import styled from 'styled-components';
import Books from 'src/ui/assets/images/booksBG.png';
import Books2 from 'src/ui/assets/images/booksBG2.png';

const StyledHeaderBanner = styled.section`
  margin: 0 80px 110px 80px;
  padding: 80px 108px 96px 108px;
  background-color: ${(props) => props.theme.color.light};
  border-radius: 16px;
  
  background-image: url(${Books});
  background-repeat: no-repeat;
  background-position: left 0 top 135px;
  
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header-banner__header {
    font-weight: ${(props) => props.theme.font_weight.large};
    font-size: ${(props) => props.theme.font_size.fs40};
    line-height: ${(props) => props.theme.line_height.lh60};
    margin: 0 0 10px 0;
  }

  .header-banner__paragraph {
    font-weight: ${(props) => props.theme.font_weight.medium};
    font-size: ${(props) => props.theme.font_size.fs20};
    line-height: ${(props) => props.theme.line_height.lh30};
    color: ${(props) => props.theme.color.dark_blue};
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
      font-size: ${(props) => props.theme.font_size.fs32};
      line-height: ${(props) => props.theme.line_height.lh48};
      margin: 0 0 15px 0;
    }

    .header-banner__paragraph {
      font-size: ${(props) => props.theme.font_size.fs16};
      line-height: ${(props) => props.theme.line_height.lh24};
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
      font-size: ${(props) => props.theme.font_size.fs18};
      line-height: ${(props) => props.theme.line_height.lh27};
      margin: 0 0 20px 0;
    }

    .header-banner__paragraph {
      font-size: ${(props) => props.theme.font_size.fs14};
      line-height: ${(props) => props.theme.line_height.lh21};
      margin: 0 0 20px 0;
    }

    .header-banner__button {
      max-width: 200px;
      padding: 10px;
      font-size: ${(props) => props.theme.font_size.fs12};
      line-height: ${(props) => props.theme.line_height.lh18};
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
