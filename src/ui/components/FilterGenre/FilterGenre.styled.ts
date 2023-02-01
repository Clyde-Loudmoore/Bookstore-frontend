import styled from 'styled-components';

const StyledFilterGenre = styled.div`
  height: 320px;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 15px 15px 5px 15px;
  background: ${(props) => props.theme.color.light};
  border-radius: 16px;
  color: ${(props) => props.theme.color.dark_blue};
  font-weight: ${(props) => props.theme.font_weight.medium};
  font-size: ${(props) => props.theme.font_size.fs16};
  line-height: ${(props) => props.theme.line_height.lh28};
  box-sizing: border-box;
  position: absolute;
  top: 74px;
  left: 0;
  z-index: 2;
  cursor: pointer;

  ::-webkit-scrollbar {
    background-color: #dce0dc;
    border-radius: 16px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #c6c9c5;
    border-radius: 16px;
    border: 3px solid grey;
  }

  .poligon {
    position: absolute;
    top: -10px;
    left: 11px;
  }

  @media (max-width: 835px) {
    width: 290px;
    font-size: ${(props) => props.theme.font_size.fs14};
  }
`;

export default StyledFilterGenre;
