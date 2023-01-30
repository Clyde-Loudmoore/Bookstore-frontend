import styled from 'styled-components';

const StyledStarRating = styled.div`
  color: #B9BAC3;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 28px;
  gap: 25px;

  span {
    display: flex;
  }

  .rating-item {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 585px) {
    gap: 0;
  } 
`;

export default StyledStarRating;
