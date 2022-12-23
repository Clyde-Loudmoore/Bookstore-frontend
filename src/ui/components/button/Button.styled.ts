import styled from 'styled-components';

const ButtonWrapper = styled.button`
  max-width: 231px;
  width: 100%;
  min-height: 38px;
  height: 44px;

  font: 500 16px/24px 'Poppins', sans-serif;
  color: #f0f4ef;
  padding: 10px 10px;
  border: none;
  border-radius: 16px;
  background-color: #344966;
  margin: 0;
  cursor: pointer;

@media (min-width: 834px) and (max-width: 1439px) {
  max-width: 127px;
  height: 44px;
  font-size: 12px; 
  line-height: 16px;
}

  
@media (min-width: 320px) and (max-width: 833px) {
  font-size: 12px; 
  line-height: 16px;
  max-width: 135px;
  height: 38px;
  padding: 10px 17px;
} 

`;

export default ButtonWrapper;
