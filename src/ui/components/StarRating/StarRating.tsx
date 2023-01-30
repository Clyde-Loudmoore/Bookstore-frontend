import React from 'react';
import { Rating } from 'react-simple-star-rating';

import StyledStarRating from './StarRating.styled';

type PropsType = {
  className?: string;
};

const StarRating: React.FC<PropsType> = (props) => {
  const [rating, setRating] = React.useState(0);

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  return (
    <StyledStarRating className={props.className}>
      <Rating
        className="rating-item"
        onClick={handleRating}
        ratingValue={rating}
        transition
        size={25}
        fillColor="#BFCC94"
      />
      <div className="rating-value">
        {rating}
      </div>
    </StyledStarRating>
  );
};

export default StarRating;
