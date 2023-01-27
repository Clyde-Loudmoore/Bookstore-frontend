import styled from 'styled-components';

const StyledFilterByInfo = styled.div`
  padding: 16px 15px 3px 15px;
  background: #F0F4EF;
  border-radius: 16px;
  color: #344966;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  box-sizing: border-box;
  position: absolute;
  top: 74px;
  left: 0;
  z-index: 2;
  cursor: pointer;

  .poligon {
    position: absolute;
    top: -10px;
    left: 11px;
  }

  @media (max-width: 835px) {
    width: 255px;
    font-weight: 500;
    font-size: 14px;
    line-height: 28px;
  }

  @media (max-width: 350px) {
    width: 290px;
  }
`;

export default StyledFilterByInfo;
