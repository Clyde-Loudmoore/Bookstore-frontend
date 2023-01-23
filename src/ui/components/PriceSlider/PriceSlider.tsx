/* eslint-disable no-console */
import React from 'react';
import ReactSlider from 'react-slider';

import StyledPriceSlider from './PriceSlider.styled';

const PriceSlider = () => {
  const [value, setValue] = React.useState([1, 100]);

  return (
    <StyledPriceSlider>
      <ReactSlider
        value={value}
        // onBeforeChange={(value, index) =>
        // console.log(`onBeforeChange: ${JSON.stringify({ value, index })}`)}
        // onChange={(value, index) => console.log(`onChange: ${JSON.stringify({ value, index })}`)}
        onChange={setValue}
        // onAfterChange={(value, index) =>
        // console.log(`onAfterChange: ${JSON.stringify({ value, index })}`)}
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
      />;
    </StyledPriceSlider>
  );
};

export default PriceSlider;
