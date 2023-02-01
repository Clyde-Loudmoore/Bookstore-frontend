import styled from 'styled-components';

const StyledFilterByInfo = styled.div`
  padding: 16px 15px 3px 15px;
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

  .poligon {
    position: absolute;
    top: -10px;
    left: 11px;
  }

  @media (max-width: 835px) {
    width: 255px;
    font-size: ${(props) => props.theme.font_size.fs14};
    line-height: ${(props) => props.theme.line_height.lh28};
  }

  @media (max-width: 350px) {
    width: 290px;
  }
`;

export default StyledFilterByInfo;
