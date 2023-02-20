import styled from 'styled-components';

const StyledPriceSlider = styled.div`
    padding: 60px 16px 40px 18px;
    width: 413px;
    background-color: ${(props) => props.theme.color.light};
    border-radius: 16px;
    box-sizing: border-box;
    position: absolute;
    top: 74px;
    left: 0;
    z-index: 2;

  .poligon {
    position: absolute;
    top: -10px;
    left: 11px;
  }

  .example-thumb {
    width: 32px;
    height: 32px;
    background-color: ${(props) => props.theme.color.light};
    border: 2px solid ${(props) => props.theme.color.green};
    border-radius: 40px;
  }

  .example-track {
    height: 12px;
    background-color: ${(props) => props.theme.color.light_grey};
    border-radius: 40px;
  }

  .example-track-1 {
    background-color: ${(props) => props.theme.color.green};
  }

  .horizontal-slider {
    display: flex;
    align-items: center;
    box-sizing: border-box;
  }

  .price-limit {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 835px) {
    width: 256px;
  }

  @media (max-width: 350px) {
    width: 290px;
  }
`;

export default StyledPriceSlider;
