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
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    margin: 0 0 60px 0;
  }

  .sing-up__paragraph{  
    font-weight: 500;
    font-size: 14px;
    line-height:28px;
    color: #344966;
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

  .input-error{
    color: red;
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
      font-size: 32px;
      line-height: 48px;
      margin: 0 0 50px 0;
    }

    .sing-up__paragraph {
      font-size: 13px;
      line-height:24px;
      margin: 9px 0 15px 0;
    }

    .sing-up__button {
      margin: 45px 0 0 0;
    }

    .input-error{
      color: red;
      font-size: 14px;
      line-height:26px;
    }
  }

  @media (max-width: 570px) {
    margin: 0 15px 60px 15px;
    padding: 0;
    flex-direction: column;

    .sing-up__header {
      font-size: 18px;
      line-height: 27px;
      margin: 0 0 30px 0;
    }

    .sing-up__paragraph {
      font-size: 12px;
      line-height:18px;
      margin: 5px 0 20px 0;
    }

    .sing-up__input-field{
      margin: 0;
    }

    .sing-up__button {
      margin: 20px 0 60px 0;
    }

    .input-error{
      color: red;
      font-size: 13px;
      line-height:20px;
    }

  }

`;

export default StyledSingUp;
