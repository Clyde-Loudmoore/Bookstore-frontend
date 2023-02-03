import styled from 'styled-components';

const StyledSingUp = styled.main`
  margin: 0 80px 80px 80px;
  padding: 50px 0 0 0;
  display: flex;
  justify-content: space-between;

  .form__container  {
    display: flex;
    flex-direction: column;
  }

  .sing-up__header  {
    font-weight: ${(props) => props.theme.font_weight.large};
    font-size: ${(props) => props.theme.font_size.fs40};
    line-height: ${(props) => props.theme.line_height.lh60};
    margin: 0 0 60px 0;
  }

  .sing-up__paragraph {  
    font-weight: ${(props) => props.theme.font_weight.medium};
    font-size: ${(props) => props.theme.font_size.fs14};
    line-height: ${(props) => props.theme.line_height.lh28};
    color: ${(props) => props.theme.color.dark_blue};
    margin: 9px 0 30px 0;
  }

  .singUpBG {
    max-width: 612px;
    max-height: 552px;
  }

  .sing-up__button {
    max-width: 151px;
    width: 100%;
    margin: 30px 0 0 0;
  }

  .input-error {
    color: ${(props) => props.theme.color.red};
  }

  .sing-up__input-field {
    max-width: 413px;
    width: 100%;
    margin: 0;
  }

  .sing-up__input-field:focus-within  {
    outline:  2px solid ${(props) => props.theme.color.dark_blue};

    .search__input {
      padding: 8px 0;
    }

    .label, .close-button {
      display: block;
    }
  }

  @media (max-width: 927px) {
    .singUpBG {
      max-width: 390px;
      min-width: 290px;
      max-height: 333px;
      min-height: 247px;
      }
  }

  @media (max-width: 834px) {
    margin: 0 17px 104px 15px;
    padding: 0;

    .sing-up__header {
      font-size: ${(props) => props.theme.font_size.fs32};
      line-height: ${(props) => props.theme.line_height.lh48};
      margin: 0 0 50px 0;
    }

    .sing-up__paragraph {
      font-size: ${(props) => props.theme.font_size.fs14};
      line-height: ${(props) => props.theme.line_height.lh24};
      margin: 9px 0 15px 0;
    }

    .sing-up__button {
      margin: 45px 0 0 0;
    }

    .input-error {
      color: ${(props) => props.theme.color.red};
      font-size: ${(props) => props.theme.font_size.fs14};
      line-height: ${(props) => props.theme.line_height.lh28};
    }
  }

  @media (max-width: 570px) {
    margin: 0 15px 60px 15px;
    padding: 0;
    flex-direction: column;

    .sing-up__header {
      font-size: ${(props) => props.theme.font_size.fs18};
      line-height: ${(props) => props.theme.line_height.lh27};
      margin: 0 0 30px 0;
    }

    .sing-up__paragraph {
      font-size: ${(props) => props.theme.font_size.fs12};
      line-height: ${(props) => props.theme.line_height.lh18};
      margin: 5px 0 20px 0;
    }

    .sing-up__input-field {
      margin: 0;
    }

    .sing-up__button {
      margin: 20px 0 60px 0;
    }

    .input-error {
      color: ${(props) => props.theme.color.red};
      font-size: ${(props) => props.theme.font_size.fs14};
      line-height: ${(props) => props.theme.line_height.lh20};
    }
  }

`;

export default StyledSingUp;
