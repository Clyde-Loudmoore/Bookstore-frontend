import styled from "styled-components";

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

  @media (max-width: 1054px) {
    margin-left: 51px;
  }

  
  @media (max-width: 737px) {
    margin-left: 10px;
  } 
  
  @media (max-width: 697px) {
    order: 3;
    margin-left: 0;
  } 

  @media (max-width: 430px) {
    max-width: 135px;
    height: 38px;
    font-weight: 500;
    font-size: 12px; 
    line-height: 18px;
    padding: 10px 17px;
  } 

`;

export default ButtonWrapper;