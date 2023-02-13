import React from 'react';
import type { ReactNode } from 'react';
import { useParams } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import { toast } from 'react-toastify';

import { useAppSelector, useAppDispatch } from 'store';
import bookThunk from 'store/thunks/bookThunk';

import StyledStarRating from './StarRating.styled';

type PropsType = {
  className?: string;
  children?: ReactNode;
};

const StarRating: React.FC<PropsType> = (props) => {
  const [rating, setRating] = React.useState(0);

  const { bookId } = useParams();

  const books = useAppSelector((store) => store.books.books);

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
        const rating = books.map((book) => book.rating);
        rating.forEach((elem) => {
          setRating(elem);
        });
      } catch (err) {
        const error = err as Error;
        return toast.error(error.message);
      }
    })();
  }, [bookId, books, userId]);

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
        {rating}
      </div>
    </StyledStarRating>
  );
};

export default StarRating;
