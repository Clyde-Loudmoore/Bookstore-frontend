import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'ui/components/Button';
import StarRating from 'ui/components/StarRating';
import StyledBook from './Book.styled';

export type PropsType = {
  showImg?: string;
  hideImg: string;
  id?: string;
  bookCover?: string;
  title?: string;
  author?: string;
  price?: number;
};

const Book: React.FC<PropsType> = (props) => {
  const [elected, setSelected] = React.useState(true);

  const electedClass = 'elected';
  const unelectedClass = 'unelected';

  return (
    <StyledBook>
      <div className="book-cover">
        <Button className={`book-selected ${elected ? unelectedClass : electedClass}`} type="submit" onClick={() => setSelected(!elected)}>
          <img src={elected ? props.hideImg : props.showImg} />
        </Button>
        <Link className="catalog__book-cover-link" to={`books/${props.id}`}>
          <img className="book-cover-img" src={props.bookCover} />
        </Link>
      </div>
      <p className="book-title">{props.title}</p>
      <p className="book-author">{props.author}</p>

      <StarRating />

      <Button className="book-price_button" type="submit">${props.price} USD</Button>
    </StyledBook>
  );
};

export default Book;
