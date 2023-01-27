import styled from 'styled-components';

const StyledPriceSlider = styled.div`
    padding: 60px 16px 40px 18px;
    width: 413px;
    background-color: #F0F4EF;
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
    background-color: #F7F7FC;
    border: 2px solid #BFCC94;
    border-radius: 40px;
  }

  .example-track {
    height: 12px;
    background-color: #D6D8E7;
    border-radius: 40px;
  }

  .example-track-1 {
    background-color: #BFCC94;
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
`;

export default StyledPriceSlider;
