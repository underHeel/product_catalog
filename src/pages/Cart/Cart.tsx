/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { PurchaseModal } from '../../components/PurchaseModal/PurchaseModal';
import { CartItem } from '../../components/CartItem';
import { useAppSelector } from '../../redux/hooks';
import { Button } from '../../components/ui/buttons/Button';
import { ArrowLeftIcon } from '../../components/ui/icons/ArrowLeftIcon';
import EmptyCart from '/img/EmptyCart.png';
import styles from './Cart.module.scss';

export const Cart: React.FC = () => {
  const { productsList, total } = useAppSelector((state) => state.cart);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.topMenu}>
        <div className={styles.backButton}>
          <Button variant="text" onClick={() => window.history.back()}>
            <ArrowLeftIcon fill="#0F0F11" />
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
            <p className={styles.amount}>{`$${total}`}</p>
            <p className={styles.text}>Total for 3 items</p>
            <div className={styles.separator} />
            <div className={styles.checkoutButton}>
              <Button
                variant="contained"
                onClick={() => {
                  setIsOpen(true);
                }}
              >
                Checkout
              </Button>
            </div>
          </div>
        </section>
      ) : (
        <div className={styles.noItems}>
          <img src={EmptyCart} alt="Empty Cart" className={styles.emptyCart} />
          <h2 className={styles.title}>Your cart is empty</h2>
        </div>
      )}

      <PurchaseModal isOpen={isOpen} />
    </div>
  );
};
