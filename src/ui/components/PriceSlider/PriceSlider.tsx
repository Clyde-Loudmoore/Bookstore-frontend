/* eslint-disable no-console */
import React from 'react';
import type { FormEventHandler } from 'react';
import ReactSlider from 'react-slider';

import StyledPriceSlider from './PriceSlider.styled';

import poligon from '../../../assets/images/polygon .png';

export type PropsType = {
  hidden?: boolean;
  onClick?: FormEventHandler;
};

const PriceSlider: React.FC<PropsType> = (props) => {
  const [value, setValue] = React.useState([1, 100]);

  return (
    <StyledPriceSlider hidden={props.hidden} onClick={props.onClick}>
      <img className="poligon" src={poligon} />
      <ReactSlider
        value={value}
        onChange={setValue}
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
      />
      <div className="price-limit">
        <p>$ {value[0]}</p>
        <p>$ {value[1]}</p>
      </div>
    </StyledPriceSlider>
  );
};

export default PriceSlider;
