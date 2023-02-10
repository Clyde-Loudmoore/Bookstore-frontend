import { Link } from 'react-router-dom';

import Button from 'ui/components/Button';
import StyledEmptyCart from './EmptyCart.styled';

import bookImg from '../../../assets/images/bookBG3.png';

const EmptyCart: React.FC = () => {
  return (
    <StyledEmptyCart>
      <img className="empty-cart__image" src={bookImg} alt="Books" />
      <div className="empty-cart">

        <h1 className="cart-header">Your cart is empty</h1>
        <p className="cart-text">Add items to cart to make a purchase. Go to the catalogue no.</p>
        <Link to="/catalog">
          <Button className="cart-button">
            Go to catalog
          </Button>
        </Link>
      </div>

    </StyledEmptyCart>
  );
};

export default EmptyCart;
