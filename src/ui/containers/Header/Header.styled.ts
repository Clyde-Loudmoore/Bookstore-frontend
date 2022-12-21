import styled from 'styled-components';

const HeaderWrapper = styled.header`

  padding: 24px 0 40px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;


  .header__search-title {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin: 0 43px 0 127px;
  };

  @media (min-width: 834px) and (max-width: 1439px) {
    padding: 20px 0 45px 0;
    .header__search-title{
      margin: 0 73px 0 50px;
    }
  }

  @media (min-width: 320px) and (max-width: 833px) {

    padding: 33px 0 39px 0;
    flex-wrap: wrap;
    justify-content: space-around;

    .header__logo-image{
      order: 1;
    }

    .header__search-title{
      order: 2;
      margin: 0 17px 0 17px;
      font-size: 14px;
      line-height: 21px;
    }

    .header__logo-image{
      max-width: 62px;
      max-height: 31px;
    }
}


`;

export default HeaderWrapper;
