import styled from 'styled-components';

const StyledButton = styled.button`
  width: 100%;
  font-family: inherit;
  font-weight: ${(props) => props.theme.font_weight.medium};
  font-size: ${(props) => props.theme.font_size.fs16};
  line-height: ${(props) => props.theme.line_height.lh24};
  letter-spacing: 0.75px;
  color: ${(props) => props.theme.color.light};
  padding: 10px 10px;
  border: none;
  border-radius: 16px;
  background-color: ${(props) => props.theme.color.dark_blue};
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.color.dark};
  }

  :active {
    background-color: ${(props) => props.theme.color.dark_blue};
    outline: 8px solid ${(props) => props.theme.color.light_grey};
  }

`;

export default StyledButton;
