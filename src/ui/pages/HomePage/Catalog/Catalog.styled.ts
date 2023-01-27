import styled from 'styled-components';

const StyledCatalod = styled.section`
  margin: 0 80px 155px 80px;

  .catalog__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
  }

  .catalog__header h1 {
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
  }

  .dropdown-wrapper{
    max-width: 630px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .catalog__books{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media (max-width: 1120px) {
    margin: 0 15px 87px 15px;

    .catalog__header {
      flex-direction: column;
    }
    
    .catalog__header h1 {
      font-size: 32px;
      line-height: 48px;
      margin-bottom: 20px;
    }

    .book-cover {
      max-width: 254px;
      width: 100%;
      max-height: 372px;
      height: 100%;
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
      font-size: 16px;
      line-height: 24px;
    }

    .book-author {
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 22px;
    }

    .book-rating {
      margin-bottom: 29px;
    }
  }
    @media (max-width: 830px) {
      margin: 0 15px 87px 15px;

      .catalog__header h1 {
        font-size: 18px;
        line-height: 27px;
        margin-bottom: 13px;
      }

      .book-cover {
        max-width: 135px;
        width: 100%;
        max-height: 192px;
        height: 100%;
      }

      .book-selected {
        width: 25px;
        height: 25px;
        top: 16px;
        left: 19px;
      }

      .book-selected img {
        width: 13px;
      }
      .book-title {
        font-size: 14px;
        line-height: 21px;
      }

      .book-author {
        font-size: 14px;
        line-height: 21px;
        margin-bottom: 15px;
      }

      .book-rating {
        margin-bottom: 29px;
      }
    }

    @media (max-width: 470px) {
      margin: 0 15px 75px 15px;
    }
`;

export default StyledCatalod;
