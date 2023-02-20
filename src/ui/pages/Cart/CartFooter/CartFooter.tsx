import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import Button from 'src/ui/components/Button';
import StyledCartFooter from 'src/ui/pages/Cart/CartFooter/CartFooter.styled';

type PropsType = {
  price: number;
};

const CartFooter: React.FC<PropsType> = (props) => {
  const makePurchase = () => {
    Swal.fire('Congratulations on your purchase!');
  };

  return (
    <StyledCartFooter>
      <h2 className="total">Total: <span>{(props.price).toFixed(2)}</span></h2>
      <div className="total-buttons">
        <Link to="/catalog">
          <Button className="continue">Continue shopping</Button>
        </Link>
        <Button className="checkout" onClick={makePurchase}>Chekout</Button>
      </div>
    </StyledCartFooter>
  );
};

export default CartFooter;
