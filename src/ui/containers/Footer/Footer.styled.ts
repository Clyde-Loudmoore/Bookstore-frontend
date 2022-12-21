import styled from 'styled-components';

const FooterWrapper = styled.footer`
font-weight: 500;
font-size: 20px;
line-height: 30px;
color: #F0F4EF;
background-color: #0D1821;
padding: 73px 80px;
display: flex;
justify-content:  space-between;
align-items: flex-start;

p{
  margin: 0 0 5px 0;
}

.footer__feedback img{
  margin-bottom: 40px;
}

.footer__map{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.footer__map ul li{
  list-style-type: none;
}

.footer__location img {
      border-radius: 6px;
}

@media (min-width: 835px) and (max-width: 1440px) {
  .footer__location img{
  max-width: 413px;
  min-width: 393px;
  width:100%;
  height: 160px;
  }
}

@media (max-width: 1008px) {
  padding: 73px 15px 79px 20px;

  p {
    margin: 0 0 11px 0;
    }    

  .footer__map{
      margin: 0 42px 0 56px;
    }
}

@media (max-width: 834px) {
  font-size: 16px;
  line-height: 24px;

  .footer__location img{
  max-width: 392px;
  width: 100%;
  height: 160px;
  }
}

@media (max-width: 697px) {
  flex-direction: column;
  align-items: center;
  
  .footer__feedback {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer__feedback img {
  width: 88px;
  height:46px;
}

.footer__map{
      align-items: center;
      margin: 40px 0;
    }

.footer__location {
    text-align: center;
    }

  .footer__location img{
    min-width: 291px;
    }
} 

@media (max-width: 343px) {
  padding: 73px 14px 30px 15px;
  align-items: flex-start;
  
  .footer__feedback {
  align-items: flex-start;
}

.footer__feedback img {
  width: 88px;
  height:46px;
}

.footer__map{
      align-items: flex-start;
      margin: 40px 0;
    }

.footer__location {
    text-align: left;
    }

  .footer__location img{
    min-width: 291px;
    }
} 

`;

export default FooterWrapper;
