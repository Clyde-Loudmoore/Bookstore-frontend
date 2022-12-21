import styled from 'styled-components';

const HeaderWrapper = styled.header`

  padding: 24px 80px 40px 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;


  .header__search-title {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin: 0 43px 0 127px;
  };

  .header__search-field {
    max-width: 630px;
    width: 100%;
    max-height: 64px;
    background-color: #f0f4ef;
    border-radius: 16px;
    display: flex;
    align-items: center;
  }

  .search__field-icon{
    padding: 22px 22px 22px 26px;
  }

  .search__input {
    height: 60px;
    background-color: #f0f4ef;
    border-radius: 16px;
    border: none;
    cursor: pointer;
    outline: none;
  }

  @media (max-width: 1008px) {
    padding: 20px 11px 45px 15px;
    .header__search-title{
      margin: 0 73px 0 50px;
    }
  }

  @media (max-width: 826px) {
    .header__search-title{
      margin: 0 17px 0 17px;
    }
} 

@media (max-width: 737px) {
  .header__search-title{
      margin: 0 17px 0 17px;
    }
  } 

  @media (max-width: 697px) {
    padding: 33px 15px 39px 15px;
    justify-content: space-around;

    .header__logo-image{
      order: 1;
    }
    .header__search-title{
      order: 2;
      font-size: 14px;
      line-height: 21px;
    }
    .header__search-field{
      order: 4;
      margin-top: 17px;
    }

    flex-wrap: wrap;

    .header__logo-image{
      max-width: 62px;
      max-height: 31px;
    }
} 

`;

export default HeaderWrapper;