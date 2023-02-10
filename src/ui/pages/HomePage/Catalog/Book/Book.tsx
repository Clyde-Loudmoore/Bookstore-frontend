import React from 'react';
import { Link } from 'react-router-dom';

import { useAppSelector } from 'store';

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
  img?: string;
  addBookInCart?: () => void;
};

const Book: React.FC<PropsType> = (props) => {
  const [elected, setSelected] = React.useState(true);
  const [anotherButton, setAnotherButton] = React.useState(false);

  const cart = useAppSelector((store) => store.books.cart);

  const electedClass = 'elected';
  const unelectedClass = 'unelected';

  // eslint-disable-next-line no-console
  console.log(anotherButton, cart);

  React.useEffect(() => {
    if (cart) {
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].bookId === Number(props.id)) {
          setAnotherButton(true);
        }
      }
    }
  }, [anotherButton, cart, props.id]);

  return (
    <StyledBook>
      <div className="book-cover">
        <Button className={`book-selected ${elected ? unelectedClass : electedClass}`} type="submit" onClick={() => setSelected(!elected)}>
          <img src={elected ? props.hideImg : props.showImg} />
        </Button>
        <Link className="catalog__book-cover-link" to={`/books/${props.id}`}>
          <img className="book-cover-img" src={props.bookCover} />
        </Link>
      </div>
      <p className="book-title">{props.title}</p>
      <p className="book-author">{props.author}</p>

      <StarRating />

      {anotherButton
        ? <Button className="dont-active">Added to cart</Button>
        : (
          <Button
            className="book-price_button"
            type="submit"
            onClick={props.addBookInCart}
          >
            ${props.price} USD
          </Button>
        )
      }

    </StyledBook>
  );
};

export default Book;
