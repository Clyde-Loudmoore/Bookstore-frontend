import React from 'react';
import { Rating } from 'react-simple-star-rating';

import StyledStarRating from './StarRating.styled';

const StarRating: React.FC = () => {
  const [rating, setRating] = React.useState(0);

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  return (
    <StyledStarRating>
      <Rating
        onClick={handleRating}
        ratingValue={rating}
        transition
        size={24}
        fillColor="#BFCC94"
      />
      <div className="rating-value">
        {rating}
      </div>
    </StyledStarRating>
  );
};

export default StarRating;
