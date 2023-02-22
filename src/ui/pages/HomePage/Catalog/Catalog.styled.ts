import styled from 'styled-components';

const StyledCatalod = styled.section`
  padding: 0 80px;
  margin: 0 0 100px 0;

  .catalog__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
  }

  .catalog__header h1 {
    font-weight: ${(props) => props.theme.font_weight.large};
    font-size: ${(props) => props.theme.font_size.fs40};
    line-height: ${(props) => props.theme.line_height.lh60};
  }

  .dropdown-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }

  .catalog__books {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  @media (max-width: 1250px) {
    padding: 0 15px;
  }

  @media (max-width: 1120px) {
    margin: 0 0 87px 0;

    .catalog__header {
      flex-direction: column;
    }
    
    .catalog__header h1 {
      font-size: ${(props) => props.theme.font_size.fs32};
      line-height: ${(props) => props.theme.line_height.lh48};
      margin-bottom: 20px;
    }

    .book-selected {
      width: 38px;
      height: 38px;
      top: 16px;
      left: 16px;
    }

    .book-selected img {
      width: 20px;
    }

    .book-title {
      font-size: ${(props) => props.theme.font_size.fs16};
      line-height: ${(props) => props.theme.line_height.lh24};
    }

    .book-author {
      font-size: ${(props) => props.theme.font_size.fs16};
      line-height: ${(props) => props.theme.line_height.lh24};
      margin-bottom: 22px;
    }

    .book-rating {
      margin-bottom: 29px;
    }
  }
  @media (max-width: 830px) {
    margin: 0 15px 87px 15px;

    .catalog__header h1 {
      font-size: ${(props) => props.theme.font_size.fs18};
      line-height: ${(props) => props.theme.line_height.lh27};
      margin-bottom: 13px;
    }

    .book-selected {
      width: 25px;
      height: 25px;
      top: 16px;
      left: 19px;
    }
  }

  @media (max-width: 470px) {
    margin: 0 15px 75px 15px;
  }

  @media (max-width: 350px) {
    .dropdown-wrapper {
      flex-direction: column;
    }

    .catalog__header {
      margin-bottom: 30px;
    }

    .catalog__books {
      gap: 6px;
    }
}
`;

export default StyledCatalod;
