import styled from 'styled-components';

const StyledCatalod = styled.section`
  margin: 0 80px 100px 80px;

  .catalog__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
  }

  .catalog__header h1 {
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
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
}
`;

export default StyledCatalod;
