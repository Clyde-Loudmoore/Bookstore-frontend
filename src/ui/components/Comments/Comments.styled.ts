import styled from 'styled-components';

const StyledComments = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 130px;
  border-top: 2px dotted black;
  border-bottom: 2px dotted black;

  p {
    font-weight: 700;
    font-size: 36px;
  }

  @media (max-width: 1215px) {
    margin-bottom: 62px;
  }
`;

export default StyledComments;
