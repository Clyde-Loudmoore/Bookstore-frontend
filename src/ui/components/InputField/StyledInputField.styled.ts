import styled from 'styled-components';

const StyledInputField = styled.div`
  max-width: 630px;
  width: 100%;
  max-height: 64px;

  padding: 18px 0;

  background-color: #f0f4ef;
  border-radius: 16px;
  display: flex;
  align-items: center;

  .search__field-icon {
    padding: 0 20px 0 26px;
  }

  .search__input {
    width: 100%;
    font: inherit;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #344966;
    background-color: #f0f4ef;
    border-radius: 16px;
    border: none;
    cursor: pointer;
    outline: none;
  }

  @media (max-width: 781px) {
    .search__input {
      font-size: 12px;
      line-height: 18px;
    }
  }
  
  @media (max-width: 525px) {
    margin-top: 17px;
    order: 4;
  }

`;

export default StyledInputField;
