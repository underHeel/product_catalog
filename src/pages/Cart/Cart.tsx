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
  const { productsList } = useAppSelector((state) => state.cart);
  const cartTotal = productsList.reduce((acc, cur) => acc + cur.price, 0);
  const itemsCount = productsList.reduce((acc, cur) => acc + cur.count, 0);

  const [total, setTotal] = useState(cartTotal);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTotal = (sum: number) => {
    setTotal((prev) => prev + sum);
  };

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
              <CartItem
                product={product}
                handleTotal={handleTotal}
                key={product.id}
              />
            ))}
          </div>

          <div className={styles.total}>
            <p className={styles.amount}>{`$${total}`}</p>
            <p className={styles.text}>{`Total for ${itemsCount} items`}</p>
            <div className={styles.separator} />
            <div className={styles.checkoutButton}>
              <Button
                variant="contained"
                onClick={() => {
                  setIsModalOpen(true);
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

      <PurchaseModal isOpen={isModalOpen} />
    </div>
  );
};
