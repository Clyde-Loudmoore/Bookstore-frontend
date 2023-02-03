import styled from 'styled-components';

const StyledInputField = styled.div<{ isError: boolean }>`
  max-width: 630px;
  width: 100%;
  background-color: ${(props) => (props.isError ? props.theme.color.isErrorBG : props.theme.color.light)};
  outline: ${(props) => (props.isError ? `2px solid ${props.theme.color.isErrorBorder}` : 'none')};
  border-radius: 16px;
  display: flex;
  align-items: center;
  position: relative;

  :focus-within {
    outline:  2px solid ${(props) => props.theme.color.dark};
  }

  .search__field-icon {
    padding: 0 20px 0 26px;
  }

  .search__input {
    width: 100%;
    height: 100%;
    padding: 18px 0;
    font: inherit;
    font-weight: ${(props) => props.theme.font_weight.small};
    font-size: ${(props) => props.theme.font_size.fs16};
    line-height: ${(props) => props.theme.line_height.lh24};
    color: ${(props) => props.theme.color.dark_blue};
    background-color: ${(props) => (props.isError ? props.theme.color.isErrorBG : props.theme.color.light)};
    border-radius: 16px;
    border: none;
    cursor: pointer;
    outline: none;
  }

  .label {
    font-weight: ${(props) => props.theme.font_weight.medium};
    font-size: ${(props) => props.theme.font_size.fs14};
    line-height: ${(props) => props.theme.line_height.lh24};
    color: ${(props) => (props.isError ? props.theme.color.red : props.theme.color.dark_blue)};
    display: none;
  }

  .close-button {
    width: 50px;
    height: 100%;
    border-radius: 16px;
    padding: 0;
    background-color: ${(props) => (props.isError ? props.theme.color.isErrorBG : props.theme.color.light)};
    position: absolute;
    top: 0;
    right: 0;
    display: none;
  }

  .close-button:hover {
    background-color: none;
  }

  .close-button:active {
    background-color: none;
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

    .label {
      font-size: ${(props) => props.theme.font_size.fs12};
    }
  }
`;

export default StyledInputField;
