import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const valuetext = (value: number) => {
  return `$${value}`;
};

const PriceSlider = () => {
  const [value, setValue] = React.useState<number[]>([1, 100]);

  const handleChange = (e: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => 'Price'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  );
};

export default PriceSlider;
