import styled from 'styled-components';

const LogInWrapper = styled.main`
padding:50px 0 154px 0;
display: flex;
justify-content: space-between;

  .form__container{
    display: flex;
    flex-direction: column;
  }

  p{
    font-weight: 500;
    font-size: 14px;
    line-height:28px;
    color: #344966;
    margin: 9px 0 30px 0;
  }

  .LogInBG {
    max-width: 612px;
    height: 552px;
  }
  
  .log-in__header{
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    margin: 0 0 60px 0;
  }

  .log-in__button{
    max-width: 151px;
    width: 100%;
    height: 44px;
    margin: 30px 0 0 0;
  }

  @media (min-width: 834px) and (max-width: 1439px) {
    padding: 55px 0 104px 0;

    .log-in__header{
      font-size: 32px;
      line-height: 48px;
      margin: 0 0 50px 0;
    }

    p{
      line-height:24px;
    }

    .LogInBG {
      max-width: 390px;
      height: 333px;
      margin-left: 20px;
    }

    .log-in__button{
    margin: 30px 0 0 0;
  }

  }

  @media (min-width: 320px) and (max-width: 833px) {
    padding:0 0 70px 0;
    flex-direction: column;

    .log-in__header{
      font-size: 18px;
      line-height: 27px;
      margin: 0 0 20px 0;
    }

    p{
      font-size: 12px;
      line-height:18px;
      margin: 5px 0 20px 0;
  }
  
  .log-in__button{
    margin: 40px 0 60px 0;
  }

  .LogInBG {
      max-width: 290px;
      height: 247px;
      margin-left: 0;
    }


  }
`;

export default LogInWrapper;
