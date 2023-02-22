import React from 'react';
import type { ReactNode } from 'react';
import { useParams } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import { toast } from 'react-toastify';

import { useAppSelector, useAppDispatch } from 'src/store';
import bookThunk from 'src/store/thunks/bookThunk';

import StyledStarRating from 'src/ui/components/StarRating/StarRating.styled';

type PropsType = {
  className?: string;
  children?: ReactNode;
  starRating: number;
};

const StarRating: React.FC<PropsType> = (props) => {
  const [rating, setRating] = React.useState(0);

  const { bookId } = useParams();

  const userId = useAppSelector((store) => store.user.user?.id);

  const dispatch = useAppDispatch();

  const handleRating = async (rating: number) => {
    if (userId && bookId) {
      await dispatch(bookThunk.addBookRating({ userId, bookId: Number(bookId), rating }));
    }
  };

  React.useEffect(() => {
    (async () => {
      try {
        setRating(Number(props.starRating));
      } catch (err) {
        return toast.error('Please try again later');
      }
    })();
  }, [props.starRating]);

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
      <div className="rating-value rating-value-catalog">
        {props.children}
        {String(rating).slice(0, 1)}
      </div>
    </StyledStarRating>
  );
};

export default StarRating;
