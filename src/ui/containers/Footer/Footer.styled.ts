import styled from 'styled-components';

const StyledFooter = styled.footer`
  font: inherit;
  font-weight: ${(props) => props.theme.font_weight.medium};
  font-size: ${(props) => props.theme.font_size.fs20};
  line-height: ${(props) => props.theme.line_height.lh30};
  color: ${(props) => props.theme.color.light};

  padding: 73px 80px;
  margin-top: auto;

  background-color: ${(props) => props.theme.color.dark};

  display: flex;
  justify-content:  space-between;
  align-items: flex-start;

  p {
    margin: 0 0 5px 0;
  }

  .footer__feedback img {
    margin-bottom: 40px;
  }

  .footer__map {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .footer__location img {
    max-width: 413px;
    width: 100%;
    height: 160px;
    border-radius: 6px;
  }

  .footer__link {
    color: ${(props) => props.theme.color.light};
    text-decoration: none;
    cursor: pointer;
  }

  .footer__link-logo{
    width: 88px;
    height: 46px;
    margin: 0;
    padding: 0;
  }

  @media (max-width: 1250px) {
    padding: 73px 14px 30px 15px;
  }

  @media (max-width: 1030px) {
    font-size: 16px;
    line-height: 24px;

    .footer__map p {
      margin: 0 0 11px 0;
    }

    .footer__location img {
      max-width: 392px;
      width:100%;
    }
  }

  @media (max-width: 920px) {
    .footer__map {
      margin: 0 42px 0 46px;
    }
  }

  @media (max-width: 831px) {
    .footer__map {
      margin: 0 15px;
    }

    .footer__map p {
      margin: 0 0 11px 0;
    }
  }

  @media (max-width: 773px) {
    font-size: ${(props) => props.theme.font_size.fs16};
    line-height: ${(props) => props.theme.line_height.lh24};

    .footer__location img {
      max-width: 291px;
      width:100%;
    }
  }

  @media (max-width: 668px) {
    flex-direction: column;
    align-items: center;

    .footer__feedback {
      margin-bottom: 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .footer__map {
      margin: 0 0 40px 0;
      align-items: center;
    }
  }

  @media (max-width: 362px) {
    align-items: flex-start;

    .footer__feedback {
      align-items: flex-start;
    }

    .footer__map {
      align-items: flex-start;
    }
  }

`;

export default StyledFooter;
