import styled from 'styled-components';

const StyledRecommendations = styled.section`
  .recommendations-header {
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    margin-bottom: 50px;
  }

  .books-wrapper {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }

  .recommendations {
    margin-bottom: 0;
  }

  @media (max-width: 1215px) {
    .recommendations-header {
      font-size: 32px;
      line-height: 48px;
    }

    .books-wrapper {
      gap: 19px;
    }
  }
`;

export default StyledRecommendations;
