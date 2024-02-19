/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/button-has-type */
import { useState } from 'react';
import { Phone } from 'src/types/Phone';
import styles from './CartItem.module.scss';

type Props = {
  phone: Phone;
};

export const CartItem: React.FC<Props> = ({ phone }) => {
  const { name, priceRegular, images } = phone;
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <div className={styles.cart}>
      <div className={styles.cart_name}>
        <div className={styles.cart_item}>
          <button className={styles.remove_button}>x</button>
          <img
            src={images[1]}
            alt={`${name} photo`}
            className={styles.product_image}
          />
        </div>
        <div className={styles.product_details}>
          <h3 className={styles.product_name}>{name}</h3>
        </div>
      </div>
      <div className={styles.quantity_control}>
        <div className={styles.quantity}>
          <button
            className={styles.on_button}
            onClick={() => {
              setQuantity((prev) => {
                if (prev === 1) {
                  return 1;
                }

                return prev - 1;
              });
            }}
          >
            -
          </button>
          <span className={styles.quantity}>{quantity}</span>
          <button
            className={styles.on_button}
            onClick={() => {
              setQuantity((prev) => prev + 1);
            }}
          >
            +
          </button>
        </div>
        <span className={styles.price}>{`$${priceRegular * quantity}`}</span>
      </div>
    </div>
  );
};
