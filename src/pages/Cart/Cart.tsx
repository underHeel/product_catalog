/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { ErrorComponent } from '../../components/ErrorComponent/ErrorComponent';
import { PurchaseModal } from '../../components/PurchaseModal';
import { CartItem } from '../../components/CartItem';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { Button } from '../../components/ui/buttons/Button';
import { ArrowLeftIcon } from '../../components/ui/icons/ArrowLeftIcon';
import { actions as cartActions } from '../../redux/slices/cartSlice';
import EmptyCart from '/img/EmptyCart.png';
import styles from './Cart.module.scss';

export const Cart: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { productsList } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const cartTotal = productsList.reduce(
    (acc, cur) => acc + cur.price * cur.count,
    0,
  );
  const itemsCount = productsList.reduce((acc, cur) => acc + cur.count, 0);

  const handleCheckout = () => {
    setIsModalOpen(true);
    productsList.forEach(({ id }) => dispatch(cartActions.remove(id)));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.topMenu}>
        <div className={styles.backButton}>
          <Button variant="text" onClick={() => window.history.back()}>
            <ArrowLeftIcon fill="var(--color)" />
            Back
          </Button>
        </div>
        <h1 className={styles.title}>Cart</h1>
      </div>

      {productsList.length !== 0 ? (
        <section className={styles.container}>
          <div className={styles.list}>
            {productsList.map((product) => (
              <CartItem product={product} key={product.id} />
            ))}
          </div>

          <div className={styles.total}>
            <p className={styles.amount}>{`$${cartTotal}`}</p>
            <p className={styles.text}>{`Total for ${itemsCount} items`}</p>
            <div className={styles.separator} />
            <div className={styles.checkoutButton}>
              <Button variant="contained" onClick={handleCheckout}>
                Checkout
              </Button>
            </div>
          </div>
        </section>
      ) : (
        <ErrorComponent image={EmptyCart} errorMessage="Your cart is empty" />
      )}

      <PurchaseModal isOpen={isModalOpen} />
    </div>
  );
};
