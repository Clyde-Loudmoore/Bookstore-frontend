import styled from 'styled-components';

const StyledBookPage = styled.section`
  margin: 20px 80px 50px 80px;

  .book__wrapper {
    margin-bottom: 100px;
    display: flex;
    flex-wrap: wrap;
    display: grid;
    column-gap: 128px;
    grid-template-areas: 
      "book-wrapper book-title"
      "book-wrapper book-description";
  }

  .book-cover__wrapper {
    width: 522px;
    height: 779px;
    position: relative;
    align-self: stretch;
    grid-area: book-wrapper;
  }
  
  .book-cover__img {
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
    width: 32px;
    height: 32px;
  }

  .elected {
    opacity: 1;
  }

  .unelected {
    opacity: 0.6;
  }

  .book-rating__wrapper {
    margin-bottom: 31px;
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .book-rating {
    display: flex;
    flex-direction: row-reverse;
    margin: 0;
  }

  .book-rate {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #B9BAC4;
    display: flex;
    gap: 7px;
  }

  .book-rate img {
    width: 24px;
    height: 24px;
  }

  .book-title {
    grid-area: book-title;
  }

  .book-title h1 {
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
  }

  .book-author {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 31px;
  }

  .book-description {
    grid-area: book-description;
  }

  .description-title {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 10px;
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
    gap: 80px;
  }

  .label {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #344966;
  }

  .paperback {
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    max-width: 243px;
    width: 100%;
    padding: 10px, 50px;
    background-color: #B9BAC4;
    margin-top: 10px;
  }

  .hardcover {
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    max-width: 216px;
    width: 100%;
    padding: 10px, 50px;
    margin-top: 10px;
  }

  .footer-banner {
    margin: 0 0 110px 0;
  }

  @media (max-width: 1215px) {
    margin: 0 15px 40px 15px;

    .book__wrapper {
      margin-bottom: 88px;
      column-gap: 21px;
    }

    .book-cover__wrapper {
      width: 391px;
      height: 584px;
    }

    .book-selected {
      width: 38px;
      height: 38px;
    }

    .book-selected img {
      width: 17px;
      height: 17px;
    }

    .book-rating__wrapper {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      flex-wrap: wrap;
      margin-bottom: 0;
    }

    .book-title h1 {
      font-size: 32px;
      line-height: 48px;
    }

    .book-author {
      font-size: 20px;
      line-height: 30px;
      margin-bottom: 21px;
    }

    .description-title {
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 22px;
    }

    .description-paragraph {
      font-size: 14px;
      line-height: 21px;
      margin-bottom: 50px;
    }

    .book-buttons__wrapper {
      gap: 20px;
    }

    .paperback {
      max-width: 188px;
      width: 100%;
      margin-top: 14px;
    }

    .hardcover {
      max-width: 184px;
      width: 100%;
      margin-top: 14px;
    }

    .footer-banner {
      margin: 0 0 90px 0;
    }
  }

  @media (max-width: 785px) {
    .book__wrapper {
      margin-bottom: 20px;
    }

    .book-cover__wrapper {
      width: 135px;
      height: 202px;
    }

    .book-selected {
      width: 24px;
      height: 24px;
      top: 15px;
      right: 15px;
    }

    .book-selected img {
      width: 13px;
      height: 13px;
    }

    .book-rating__wrapper {
      font-size: 12px;
      line-height: 18px;
    }

    .book-title h1 {
      font-size: 18px;
      line-height: 20px;
      margin-bottom: 14px;
    }

    .book-author {
      font-size: 12px;
      line-height: 18px;
      margin-bottom: 23px;
    }

    .description-title {
      font-size: 14px;
      line-height: 21px;
      margin-bottom: 22px;
    }

    .description-paragraph {
      font-size: 12px;
      line-height: 18px;
      margin-bottom: 30px;
    }

    .label {
      font-size: 14px;
      line-height: 21px;
    }

    .paperback, .hardcover {
      font-size: 12px;
      line-height: 18px;
      max-width: 135px;
      width: 100%;
      margin-top: 17px;
    }

    .footer-banner {
      margin: 0 0 60px 0;
    }
  }

  @media (max-width: 528px) {
    .book__wrapper {
      grid-template-areas: 
        "book-wrapper book-title"
        "book-description book-description";
      grid-gap: 20px;
    }

    .book-rating__wrapper {
      flex-direction: column;
      align-items: flex-start;
    }

    .book-rating {
      flex-direction: column-reverse;
      align-items: flex-start;
      gap: 25px;
    }
  }
  `;

export default StyledBookPage;
