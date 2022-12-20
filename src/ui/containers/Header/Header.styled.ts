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
`;

export default HeaderWrapper;