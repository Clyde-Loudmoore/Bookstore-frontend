import styled from 'styled-components';

const StyledEmptyCart = styled.section`
  margin: 78px 0 148px 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .empty-cart__image {
    max-width: 433px;
    width: 100%;
    max-height: 261px;
  }

  .cart-header {
    font-weight: ${(props) => props.theme.font_weight.large};
    font-size: ${(props) => props.theme.font_size.fs40};
    line-height: ${(props) => props.theme.line_height.lh60};
    margin-bottom: 20px;
  }

  .cart-text {
    max-width: 465px;
    margin-bottom: 60px;
    font-weight: ${(props) => props.theme.font_weight.medium};
    font-size: ${(props) => props.theme.font_size.fs24};
    line-height: ${(props) => props.theme.line_height.lh36};
    color: ${(props) => props.theme.color.dark_blue};
  }

  .cart-button{
    width: 219px;
  }

  @media (max-width: 980px) {
    padding: 0 97px 0 15px;
    margin: 60px 0 104px 0;
    gap: 62px;

    .empty-cart__image {
      max-width: 350px;
      width: 100%;
      max-height: 212px;
    }

    .cart-header {
      font-size: ${(props) => props.theme.font_size.fs32};
      line-height: ${(props) => props.theme.line_height.lh48};
    }

    .cart-text {
      max-width: 330px;
      margin-bottom: 50px;
      font-size: ${(props) => props.theme.font_size.fs16};
      line-height: ${(props) => props.theme.line_height.lh24};
    }
  }

  @media (max-width: 700px) {
    padding: 0 15px;
    margin: 19px 0 100px 0;
    flex-direction: column-reverse;
    gap: 0;

    .empty-cart__image {
      max-width: 290px;
      width: 100%;
      max-height: 176px;
    }

    .empty-cart {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .cart-header {
      margin-bottom: 15px;
      font-size: ${(props) => props.theme.font_size.fs18};
      line-height: ${(props) => props.theme.line_height.lh27};
    }

    .cart-text {
      max-width: 250px;
      margin-bottom: 30px;
      font-size: ${(props) => props.theme.font_size.fs12};
      line-height: ${(props) => props.theme.line_height.lh18};
    }

    .cart-button {
      padding: 10px 50px;
      width: 290px;
      margin-bottom: 40px;
      font-size: ${(props) => props.theme.font_size.fs12};
      line-height: ${(props) => props.theme.line_height.lh18};
    }
  }

  @media (max-width: 362px) {
    .empty-cart {
      align-items: flex-start;
    }
  }
`;

export default StyledEmptyCart;
