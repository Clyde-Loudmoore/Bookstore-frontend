import styled from 'styled-components';

const StyledNoComments = styled.div`
  width: 310px;

  .text {
    font-weight: ${(props) => props.theme.font_weight.medium};
    font-size: ${(props) => props.theme.font_size.fs24};
    line-height: ${(props) => props.theme.line_height.lh36};
  }
`;

export default StyledNoComments;
