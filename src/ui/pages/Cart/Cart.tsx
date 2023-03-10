import React from 'react';

import { useAppSelector } from 'src/store';
import type { UserType } from 'src/types';

import StyledCart from 'src/ui/pages/Cart/Cart.styled';
import EmptyCart from 'src/ui/components/EmptyComponent';
import CartMain from 'src/ui/pages/Cart/CartMain';

import CartFooter from './CartFooter';

const Cart: React.FC = () => {
  const user = useAppSelector((store) => store.user.user) as UserType;
  const cart = useAppSelector((store) => store.books.cart);

  let totalSum = 0;

  if (cart) {
    for (let i = 0; i < cart.length; i++) {
      totalSum += +cart[i].price * +cart[i].quantityOfGoods;
    }
  }

  const totalPrice = +totalSum.toFixed(2);

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
                userId={user.id}
              />
            );
          })
        ) : (
          <EmptyCart
            header="Your cart is empty"
            text="Add items to cart to make a purchase. Go to the catalogue no."
            textButton="Go to catalog"
          />
        )
      }

      {cart && cart.length
        ? <CartFooter price={totalPrice} />
        : (
          <EmptyCart
            header="Your cart is empty"
            text="Add items to cart to make a purchase. Go to the catalogue no."
            textButton="Go to catalog"
          />
        )}

    </StyledCart >
  );
};

export default Cart;
