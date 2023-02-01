import styled from 'styled-components';

const StyledInputField = styled.div<{ isError: boolean }>`
  max-width: 630px;
  width: 100%;
  max-height: 64px;
  padding: 18px 0;
  background-color: ${(props) => props.theme.color.light};
  border-radius: 16px;
  display: flex;
  align-items: center;

  .search__field-icon {
    padding: 0 20px 0 26px;
  }

  .search__input {
    width: 100%;
    font: inherit;
    font-weight: ${(props) => props.theme.font_weight.small};
    font-size: ${(props) => props.theme.font_size.fs16};
    line-height: ${(props) => props.theme.line_height.lh24};
    color: ${(props) => props.theme.color.dark_blue};
    background-color: #f0f4ef;
    border-radius: 16px;
    border: none;
    cursor: pointer;
    outline: none;
  }

  @media (max-width: 781px) {
    .search__input {
      font-size: ${(props) => props.theme.font_size.fs12};
      line-height: ${(props) => props.theme.line_height.lh18};
    }
  }
  
  @media (max-width: 525px) {
    margin-top: 17px;
    order: 4;
  }

`;

export default StyledInputField;
