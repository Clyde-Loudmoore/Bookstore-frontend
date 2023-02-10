/* eslint-disable no-nested-ternary */
import React from 'react';

import { useAppSelector, useAppDispatch } from 'store';
import cartThunk from 'store/thunks/cartThunk';

import StyledCart from './Cart.styled';
import EmptyCart from './EmptyCart';
import CartMain from './CartMain/CartMain';
import CartFooter from './CartFooter';

const Cart: React.FC = () => {
  const user = useAppSelector((store) => store.user.user);
  const cart = useAppSelector((store) => store.books.cart);

  const price = cart?.map((book) => book.price);
  const quantityOfGoods = cart?.map((book) => book.quantityOfGoods);
  let totalPrice = 0;

  if (price && quantityOfGoods) {
    for (let i = 0; i < price.length; i++) {
      for (let j = 0; j < quantityOfGoods.length; j++) {
        totalPrice = +price[i] * +quantityOfGoods[j];
      }
    }
  }

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    (async () => {
      if (user) {
        dispatch(cartThunk.getCart(user.id));
      }
    })();
  }, [dispatch, user]);

  return (
    <StyledCart>
      {cart
        ? (
          cart.map((book) => {
            return (
              <CartMain
                key={book.id}
                cover={book.cover}
                title={book.title}
                author={book.author}
                bookId={book.bookId}
                id={book.id}
                quantityOfGoods={book.quantityOfGoods}
                price={book.price}
                userId={user!.id}
              />
            );
          })
        ) : (<EmptyCart />)
      }

      {cart!.length ? <CartFooter price={totalPrice} /> : <EmptyCart />}

    </StyledCart >
  );
};

export default Cart;
