import styled from 'styled-components';

const StyledBookPage = styled.section`
  margin: 20px 80px 110px 80px;

  .book__wrapper {
    display: flex;
    justify-content: space-between;
  }

  .book-cover__wrapper {
    max-width: 522px;
    width: 100%;
    position: relative;
  }
  
  .book-cover {
    max-height: 779px;
    width: 100%;
    height: 100%;
    border-radius: 16px;
  }
  
  .book-selected {
    width: 59px;
    height: 59px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 30px;
    right: 30px;
  }

  .book-selected img {
    width: 31px;
    height: 31px;
  }

  .book-description__wrapper p {
    max-width: 900px;
  }

  .book-description__wrapper h1 {
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
  }
  
  .book-author {
    margin-bottom: 31px;
  }

  .book-description__wrapper h2 {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
  }

  .book-rate {
    margin-bottom: 31px;
  }

  .description-title {
    margin-bottom: 31px;
  }

  .description-paragraph {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #344966;
    margin-bottom: 74px;
  }

  .book-buttons__wrapper {
    display: flex;
    justify-content: space-between;
  }

  .paperback-wrapper {
    max-width: 243px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .paperback {
    width: 100%;
    height: 50px;
    padding: 10px 50px;
    background-color: #B9BAC4;
  }

  .hardcover-wrapper {
    max-width: 216px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .hardcover {
    padding: 10px 50px;
    width: 100%;
    height: 50px;
  }

  .elected {
    opacity: 1;
  }

  .unelected {
    opacity: 0.6;
  }
  `;

export default StyledBookPage;
