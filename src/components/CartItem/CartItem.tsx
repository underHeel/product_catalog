/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/button-has-type */
import { useState } from 'react';
import { Phone } from 'src/types/Phone';
import styles from './CartItem.module.scss';
import { CloseIcon } from '../ui/icons/CloseIcon';
import { IconButton } from '../ui/buttons/IconButton';
import { MinusIcon } from '../ui/icons/MinusIcon';
import { PlusIcon } from '../ui/icons/PlusIcon';

type Props = {
  phone: Phone;
};

export const CartItem: React.FC<Props> = ({ phone }) => {
  const { name, priceRegular, images } = phone;
  const [quantity, setQuantity] = useState<number>(1);

  const totalAmount = quantity * priceRegular;

  const handlerDecreaseQuantity = () => {
    setQuantity((prev) => {
      if (prev === 1) {
        return 1;
      }

      return prev - 1;
    });
  };

  const handlerIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className={styles.cart}>
      <div className={styles.cartInfo}>
        <div className={styles.cartItem}>
          <button
            className={styles.removeButton}
            onClick={handlerIncreaseQuantity}
          >
            <CloseIcon />
          </button>
          <img
            src={images[1]}
            alt={`${name} photo`}
            className={styles.cartImage}
          />
        </div>
        <div className={styles.productDetails}>
          <p className={styles.productName}>{name}</p>
        </div>
      </div>
      <div className={styles.quantityControl}>
        <div className={styles.quantity}>
          <div className={styles.onButton}>
            <IconButton
              onClick={handlerDecreaseQuantity}
              classNames={styles.iconButton}
            >
              <MinusIcon />
            </IconButton>
          </div>
          <span className={styles.quantity}>{quantity}</span>
          <div className={styles.onButton}>
            <IconButton
              onClick={handlerIncreaseQuantity}
              classNames={styles.iconButton}
            >
              <PlusIcon />
            </IconButton>
          </div>
        </div>
        <span className={styles.price}>{`$${totalAmount}`}</span>
      </div>
    </div>
  );
};
