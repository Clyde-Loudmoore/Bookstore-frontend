import styled from 'styled-components';

const StyledHeader = styled.header`
  padding: 24px 80px 40px 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header__search-title {
    font-weight: ${(props) => props.theme.font_weight.medium};
    font-size: ${(props) => props.theme.font_size.fs16};
    line-height: ${(props) => props.theme.line_height.lh24};
    padding-left: 37px;
    margin: 0 43px 0 0;
  };

  .header__button-wrapper {
    max-width:470px;
    width: 100%;
    margin-left: 45px;
    display: flex;
    gap: 15px;
  }

  .header__button-link {
    max-width: 231px;
    width: 100%;
  }

  .header__small-button-wrapper{
    display: flex;
    gap: 27px;
    margin-left: 81px;
  }

  .header__small-button{
    width: 48px;
    height:48px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .cart-items {
    width: 23px;
    height: 23px;
    font-weight: ${(props) => props.theme.font_weight.large};
    font-size: ${(props) => props.theme.font_size.fs12};
    line-height: ${(props) => props.theme.line_height.lh18};
    color: ${(props) => props.theme.color.dark_blue};
    background-color: #BFCC94;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -6px;
    right: -8px;
  }

  .header__small-button-link {
    width: 48px;
    border-radius: 50%;
  }

  .search__input-field:focus-within {
    outline:  2px solid ${(props) => props.theme.color.dark_blue};

    .search__input {
      padding: 8px 0;
    }

    .label, .close-button {
      display: block;
    }
  }

  @media (max-width: 834px) {
    padding: 20px 11px 45px 15px;

    .header__search-title {
      font-size: ${(props) => props.theme.font_size.fs14};
      line-height: ${(props) => props.theme.line_height.lh12};
      padding-left: 17px;
      margin: 0 10px 0 0;
    };

    .header__button-wrapper {
      max-width:156px;
      width: 100%;
      margin-left: 17px;
      gap: 7px;
      order: 2;
    }

    .header__button {
      font-size: ${(props) => props.theme.font_size.fs12};
      line-height: ${(props) => props.theme.line_height.lh18};
    }
  }

  @media (max-width: 668px) {
    .header__small-button-wrapper{
      margin-left: 15px;
      gap: 18px;
    }
  }

  @media (max-width: 525px) {
    padding: 33px 15px 30px 15px;
    flex-wrap: wrap;

    .header__search-title {
      padding-left: 0;
      margin: 0 17px;
    };

    .header__button-wrapper {
      order: 2;
    }
  }

  @media (max-width: 421px) {
    .header__small-button-wrapper{
      margin-left: 6px;
      gap: 10px;
    }

    .header__small-button{
      width: 33px;
      height:32px;
    }

    .header__small-button img{
      width: 100%;
    }

    .header__small-button-link {
      width: 33px;
      border-radius: 50%;
    }
  }

  @media (max-width: 413px) {
    .header__search-title {
      margin: 0 2px;
    };

    .header__button-wrapper {
      margin-left: 0;
      gap: 2px;
    }
  }

  @media (max-width: 366px) {
    .header__button-wrapper {
      flex-direction: column;
      max-width: 75px;
      gap: 1px;
      }

    .header__button {
      padding:3px;
      }
  }
`;

export default StyledHeader;
