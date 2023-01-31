import StyledCart from './Cart.styled';
import EmptyCart from './EmptyCart/EmptyCart';

const Cart: React.FC = () => {
  return (
    <StyledCart>

      <EmptyCart />

    </StyledCart>
  );
};

export default Cart;
