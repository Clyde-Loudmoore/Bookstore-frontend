import styled from 'styled-components';

const ButtonWrapper = styled.button`

font: 500 16px/24px 'Poppins', sans-serif;

  color: #f0f4ef;
  max-width: 231px;
  width: 100%;
  min-height: 38px;
  height: 44px;
  padding: 10px 50px;
  border: none;
  border-radius: 16px;
  background-color: #344966;
  margin-left: 97px;
  order: 2;

  @media (min-width: 834px) and (max-width: 1439px) {
    max-width: 231px;
    height: 44px;
    margin-left: 51px;
    padding: 10px 50px;
    font-size: 16px; 
    line-height: 24px;
  }

  
  @media (min-width: 320px) and (max-width: 833px) {
    max-width: 135px;
    height: 38px;
    margin-left: 0;
    padding: 10px 17px;
    font-size: 12px; 
    line-height: 18px;
  } 

`;

export default ButtonWrapper;
