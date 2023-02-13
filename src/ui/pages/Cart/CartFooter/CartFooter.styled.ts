import styled from 'styled-components';

const StyledCartFooter = styled.section`
  .total {
    font-weight: ${(props) => props.theme.font_weight.medium};
    font-size: ${(props) => props.theme.font_size.fs36};
    line-height: ${(props) => props.theme.line_height.lh54};
    margin-bottom: 30px;
  }

  .total span {
    font-weight: ${(props) => props.theme.font_weight.large};
    }

  .total-buttons {
    display: flex;
    gap: 20px;
    }

  .continue {
    font-weight: ${(props) => props.theme.font_weight.medium};
    font-size: ${(props) => props.theme.font_size.fs16};
    line-height: ${(props) => props.theme.line_height.lh28};
    color: ${(props) => props.theme.color.dark};
    background-color: ${(props) => props.theme.color.white};
    max-width: 268px;
    width: 100%;
    border: 1px solid ${(props) => props.theme.dark};
  } 

  .continue:hover {
    background-color: ${(props) => props.theme.color.light_grey};
  }
  
  .checkout {
    max-width: 174px;
    width: 100%;
  }

  @media (max-width: 525px) {
    .total {
      font-size: ${(props) => props.theme.font_size.fs24};
      line-height: ${(props) => props.theme.line_height.lh36};
    }

    .total-buttons {
      display: flex;
      flex-direction: column;
      gap: 18px;
      }

    .continue, .checkout {
      font-size: ${(props) => props.theme.font_size.fs12};
      line-height: ${(props) => props.theme.line_height.lh18};
      max-width: 290px;
      width: 100%;
    }
  }

`;

export default StyledCartFooter;
