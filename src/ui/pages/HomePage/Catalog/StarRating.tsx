import React from 'react';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

const StarRating = () => {
  const [value, setValue] = React.useState(0);

  return (
    <>
      <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={() => setValue(value)}
      />
      <Typography component="legend">Read only</Typography>
      <Rating name="controlled" value={value} precision={0} />
      {/* <Typography component="legend">Disabled</Typography>
      <Rating name="controlled" value={value} precision={0} />
      <Typography component="legend">No rating given</Typography>
      <Rating name="controlled" value={value} precision={0} /> */}
    </>
  );
};

export default StarRating;
