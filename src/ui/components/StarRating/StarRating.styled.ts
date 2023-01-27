import styled from 'styled-components';

const StyledStarRating = styled.div`
  color: #B9BAC3;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 28px;

  span {
    display: flex;
    gap: 32px;
  }

  @media (max-width: 960px) {
    span {
      gap: 25px;
    }
  }

  @media (max-width: 560px) {
    span {
      gap: 0;
    }
  }
`;

export default StyledStarRating;
