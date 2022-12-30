import styled from 'styled-components';

const StyledHeader = styled.header`

  padding: 24px 80px 40px 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header__search-title {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
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
  }

  .header__small-button-link {
    width: 48px;
    border-radius: 50%;
  }
  
  @media (max-width: 834px) {
    padding: 20px 11px 45px 15px;

    .header__search-title {
      font-size: 14px;
      line-height: 12px;
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
      font-size: 12px;
      line-height: 18px;
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
