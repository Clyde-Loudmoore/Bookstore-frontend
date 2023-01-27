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

  .book-cover-img, .catalog__book-cover-link {
    width: 100%;
    height: 100%;
    border-radius: 16px;
  }

  .book-title {
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #344966;
  }

  .book-author {
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #B9BAC3;
    margin-bottom: 21px;
  }

  .book-price_button {
    margin-bottom: 60px;
  }
`;

export default StyledBook;
