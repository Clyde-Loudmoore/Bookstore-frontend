import cartThunk from 'store/thunks/cartThunk';
import { useAppDispatch } from 'store';

import type { CartType } from 'types';

import Button from 'ui/components/Button';
import StyledCartMain from './CartMain.styled';

import increaseIcon from '../../../assets/icons/increase.png';
import reduceIcon from '../../../assets/icons/reduce.png';
import deleteIcon from '../../../assets/icons/delete.png';
import grandLine from '../../../assets/icons/grandLine.png';

const CartMain: React.FC<CartType> = (props) => {
  const dispatch = useAppDispatch();

  const handleReduceBook = (bookId: number) => {
    dispatch(cartThunk.deleteCopyBook(bookId));
  };

  const handleIncreaseBook = (bookId: number) => {
    dispatch(cartThunk.addCopyBook(bookId));
  };

  const handleDeleteBook = (cartId: number) => {
    dispatch(cartThunk.deleteBookInCart(cartId));
  };

  return (
    <StyledCartMain>
      <div>
        <div className="wrapper">
          <img className="cover" src={props.cover} />

          <div className="info">
            <h1 className="title">{props.title}</h1>
            <h2 className="author">{props.author}</h2>

            <div className="count-buttons">
              <Button className="reduce" onClick={() => handleReduceBook(props.bookId)}>
                <img src={reduceIcon} alt="-" />
              </Button>

              <p className="number">{props.quantityOfGoods}</p>

              <Button className="increase" onClick={() => handleIncreaseBook(props.bookId)}>
                <img src={increaseIcon} alt="+" />
              </Button>

              <Button className="delete" onClick={() => handleDeleteBook(props.id)}>
                <img src={deleteIcon} alt="DELETE" />
              </Button>
            </div>

            <h2 className="sum">${props.price * props.quantityOfGoods} USD</h2>
          </div>
        </div>

        <div className="grand-line">
          <img src={grandLine} />
        </div>
      </div>
    </StyledCartMain>
  );
};

export default CartMain;
