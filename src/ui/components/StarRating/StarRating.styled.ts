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

  .rating-value {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .rating-value__image {
    width: 19px;
    height: 19px;
  }

  @media (max-width: 585px) {
    gap: 0;
  } 
`;

export default StyledStarRating;
