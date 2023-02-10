import styled from 'styled-components';

const StyledBook = styled.div`
  .book-cover {
    max-width: 305px;
    width: 100%;
    max-height: 448px;
    height: 100%;
    margin-bottom: 30px;
    position: relative;
  }

  .book-selected {
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    position: absolute;
    top: 20px;
    left: 20px;
  }

  .elected {
    opacity: 1;
  }

  .unelected {
    opacity: 0.6;
  }

  .book-cover-img {
    width: 100%;
    height: 100%;
    border-radius: 16px;
  }

  .book-title {
    font-weight: ${(props) => props.theme.font_weight.medium};
    font-size: ${(props) => props.theme.font_size.fs20};
    line-height: ${(props) => props.theme.line_height.lh30};
    color: ${(props) => props.theme.color.dark_blue};
  }

  .book-author {
    font-weight: ${(props) => props.theme.font_weight.medium};
    font-size: ${(props) => props.theme.font_size.fs20};
    line-height: ${(props) => props.theme.line_height.lh30};
    color: ${(props) => props.theme.color.dark_grey};
    margin-bottom: 21px;
  }

  .book-price_button {
    margin-bottom: 60px;
  }

  .dont-active {
    color: ${(props) => props.theme.color.dark};
    background-color: ${(props) => props.theme.color.white};
    border: 1px solid ${(props) => props.theme.color.dark};
    margin-bottom: 60px;
    cursor: default;
  }

  .dont-active:active {
    outline: none
  }

  @media (max-width: 960px) {
    .book-cover {
      max-width: 254px;
      max-height: 372px;
    }

    .book-selected {
      width: 38px;
      height: 38px;
      top: 16px;
      left: 16px;
    }
  }

  @media (max-width: 585px) {
    .book-cover {
      max-width: 132px;
      max-height: 192px;
      margin-bottom: 15px;
    }
    .book-title {
      font-size: ${(props) => props.theme.font_size.fs14};
      line-height: ${(props) => props.theme.line_height.lh21};
    }

    .book-author {
      font-size: ${(props) => props.theme.font_size.fs14};
      line-height: ${(props) => props.theme.line_height.lh21};
      margin-bottom: 15px;
    }

    .book-price_button {
      font-size: ${(props) => props.theme.font_size.fs14};
      line-height: ${(props) => props.theme.line_height.lh28};
      margin-bottom: 29px;
    }

    .book-selected {
      width: 25px;
      height: 25px;
      left: 19px;
    }

    .book-selected img {
      width: 13px;
    }

    .book-price_button {
      max-width: 135px;
      width: 100%;
      padding: 3px 21px;
    }
  }
`;

export default StyledBook;
