/* eslint-disable no-console */
import React from 'react';
import type { FormEventHandler } from 'react';
import { useSearchParams } from 'react-router-dom';
import ReactSlider from 'react-slider';

import StyledPriceSlider from './PriceSlider.styled';

import poligon from '../../../assets/images/polygon .png';

export type PropsType = {
  onClick?: FormEventHandler;
};

const PriceSlider: React.FC<PropsType> = (props) => {
  const minPrice = 5.99;
  const maxPrice = 25.99;
  // const [dropSelect, setDropSelect] = React.useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = React.useState([minPrice, maxPrice]);

  const handlerPriceSlider = (value: number[]) => {
    searchParams.set('minPrice', value[0].toString());
    searchParams.set('maxPrice', value[1].toString());
    if (value[0] === minPrice && value[1] === maxPrice) {
      searchParams.delete('minPrice');
      searchParams.delete('maxPrice');
    }
    setSearchParams(searchParams);
  };

  const changeHandler = (value: number[]) => {
    setValue(value);
  };

  React.useEffect(() => {
    const minValue = Number(searchParams.get('minPrice') || minPrice);
    const maxValue = Number(searchParams.get('maxPrice') || maxPrice);
    setValue([minValue, maxValue]);
  }, [searchParams]);

  return (
    <StyledPriceSlider onClick={props.onClick}>
      <img className="poligon" src={poligon} />
      <ReactSlider
        value={value}
        min={minPrice}
        max={maxPrice}
        onChange={(value) => changeHandler(value)}
        onAfterChange={(value) => handlerPriceSlider(value)}
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
