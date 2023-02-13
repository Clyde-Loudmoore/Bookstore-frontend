import styled from 'styled-components';

const StyledFavoritesPage = styled.main`
  padding: 0 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .wrapper {
    text-align: center;
    max-width: 340px;
    width: 100%;
    margin: 0 auto 30px auto;
    padding: 10px;
    border: 2px dashed ${(props) => props.theme.color.green};
    border-top-left-radius: 30%;
    position: relative;
  }

  .book-selected {
    width: 59px;
    height: 59px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 5px;
    right: 10px;
  }

  .book-selected img {
    width: 32px;
    height: 32px;
  }

  .elected {
    opacity: 1;
  }

  .unelected {
    opacity: 0.6;
  }

  .cover {
    border-radius: 16px;
    width: 197px;
    height: 289px;
  }

  .title {
    font-weight: ${(props) => props.theme.font_weight.large};
    font-size: ${(props) => props.theme.font_size.fs40};
    line-height: ${(props) => props.theme.line_height.lh60};
  }

  .author {
    font-weight: ${(props) => props.theme.font_weight.medium};
    font-size: ${(props) => props.theme.font_size.fs24};
    line-height: ${(props) => props.theme.line_height.lh36};
  }

  .grand-line {
    margin-bottom: 30px;
  }

  @media (max-width: 525px) {
    .wrapper {
      max-width: 250px;
      width: 100%;
    }

    .cover {
      width: 135px;
      height: 192px;
    }

    .book-selected {
      width: 48px;
      height: 48px;
      top: 5px;
      right: 10px;
    }

    .book-selected img {
      width: 26px;
      height: 26px;
    }

    .title {
      font-size: ${(props) => props.theme.font_size.fs18};
      line-height: ${(props) => props.theme.line_height.lh27};
    }

    .author {
      font-size: ${(props) => props.theme.font_size.fs14};
      line-height: ${(props) => props.theme.line_height.lh21};
    }
  }
`;

export default StyledFavoritesPage;
