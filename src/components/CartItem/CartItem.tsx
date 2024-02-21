/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/button-has-type */
import { useState } from 'react';
import { Product } from 'src/types/Product';
import styles from './CartItem.module.scss';
import { CloseIcon } from '../ui/icons/CloseIcon';
import { IconButton } from '../ui/buttons/IconButton';
import { MinusIcon } from '../ui/icons/MinusIcon';
import { PlusIcon } from '../ui/icons/PlusIcon';

type Props = {
  product: Product;
};

export const CartItem: React.FC<Props> = ({ product }) => {
  const { name, price, image } = product;
  const [quantity, setQuantity] = useState<number>(1);

  const totalAmount = quantity * price;

  const handlerDecreaseQuantity = () => {
    setQuantity((prev) => {
      if (prev <= 1) {
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
            onClick={() => setQuantity(0)}
          >
            <CloseIcon />
          </button>
          <img src={image} alt={`${name} photo`} className={styles.cartImage} />
        </div>
        <div className={styles.productName}>{name}</div>
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
          <span className={styles.quantityValue}>{quantity}</span>
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
