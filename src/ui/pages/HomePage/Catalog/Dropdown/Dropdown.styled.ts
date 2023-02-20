import styled from 'styled-components';

const StyledDropdown = styled.div`
  width: 196px;
  padding: 10px 15px;
  color: ${(props) => props.theme.color.dark_blue};
  font-weight: ${(props) => props.theme.font_weight.medium};
  font-size: ${(props) => props.theme.font_size.fs18};
  line-height: ${(props) => props.theme.lh28};
  background: #F0F4EF;
  border-radius: 16px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  cursor: pointer;

  .wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 1120px) {
    width: 255px;
  }

  @media (max-width: 830px) {
      font-weight: ${(props) => props.theme.font_weight.medium};
      font-size: ${(props) => props.theme.font_size.fs14};
      line-height: ${(props) => props.theme.line_height.lh28};
  }

  @media (max-width: 350px) {
    width: 290px;
  }
`;

export default StyledDropdown;
