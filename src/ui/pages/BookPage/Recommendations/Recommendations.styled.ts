import styled from 'styled-components';

const StyledRecommendations = styled.section`  
  .recommendations-header {
    font-weight: ${(props) => props.theme.font_weight.large};
    font-size: ${(props) => props.theme.font_size.fs40};
    line-height: ${(props) => props.theme.line_height.lh60};
    margin-bottom: 50px;
  }

  .books-wrapper {
    max-height: 732px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
  }

  .recommendations {
    margin-bottom: 0;
  }

  @media (max-width: 1410px) {
    .recommendations-header {
      font-size: ${(props) => props.theme.font_size.fs32};
      line-height: ${(props) => props.theme.line_height.lh48};
    }

    .books-wrapper {
      display: flex;
      flex-wrap: wrap;
    }
  }

  @media (max-width: 1215px) {
    .books-wrapper {
      max-height: 700px;
      height: 100%;
    }
  }

  @media (max-width: 960px) {
    .recommendations-header {
      font-size: ${(props) => props.theme.font_size.fs32};
      line-height: ${(props) => props.theme.line_height.lh48};
    }

    .books-wrapper {
      max-height: 600px;
      height: 100%;
    }
  }

  @media (max-width: 585px) {
    .recommendations-header {
      font-size: ${(props) => props.theme.font_size.fs18};
      line-height: ${(props) => props.theme.line_height.lh27};
      text-align: center;
      margin-bottom: 30px;
    }

    .books-wrapper {
      max-width: 441px;
      width: 100%;
      max-height: 370px;
      height: 100%;
      margin: 0 auto;
      gap: 18px;
    }
  }

  @media (max-width: 360px) {
    .recommendations-header {
      text-align: start;
    }

    .books-wrapper {
      gap: 0;
    }
  }
`;

export default StyledRecommendations;
