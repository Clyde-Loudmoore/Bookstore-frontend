import styled from 'styled-components';

export const BGFooter = styled.div`
background-color: #0D1821;
padding: 0 80px;

@media (min-width: 834px) and (max-width: 1439px) {
  padding: 0 15px 0 20px;
}

@media (min-width: 320px) and (max-width: 833px) {
  padding: 0 14px 0 15px;
}
`;

export const FooterWrapper = styled.footer`
max-width: 1280px;
margin: 0 auto;
font-weight: 500;
font-size: 20px;
line-height: 30px;
color: #F0F4EF;
padding: 73px 0;
display: flex;
justify-content:  space-between;
align-items: flex-start;

p{
  margin: 0 0 5px 0;
}

.footer__feedback img {
  margin-bottom: 40px;
}

.footer__map{
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

@media (min-width: 834px) and (max-width: 1439px) {
  font-size: 16px;
  line-height: 24px;

  padding: 73px 0 79px 0;

  .footer__map p {
    margin: 0 0 11px 0;
  }

  .footer__location img {
    max-width: 392px;
    width:100%;
    height: 160px;
  }
}

@media (min-width: 320px) and (max-width: 833px) {
  padding: 73px 0 25px 0;

  flex-direction: column;

  .footer__feedback {
    margin-bottom: 40px;
  }

  .footer__feedback img{
    margin-bottom: 30px;
  }

  .footer__map p {
    margin-bottom: 40px;
  }

  .footer__map p {
    margin: 0 0 11px 0;
  }

  .footer__location img{
    max-width: 291px;
    height: 160px;
  }
}
`;
