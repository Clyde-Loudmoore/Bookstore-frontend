import styled from 'styled-components';

const StyledFilterGenre = styled.div`
  height: 320px;
  overflow-y: scroll;
  padding: 15px 15px 5px 15px;
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

  ::-webkit-scrollbar {
    background-color: black;
    border-radius: 16px;
  }

  .poligon {
    position: absolute;
    top: -10px;
    left: 11px;
  }
`;

export default StyledFilterGenre;
