/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/button-has-type */
import { useState } from 'react';
import { Product } from 'src/types/Product';
import cn from 'classnames';
import { useAppDispatch } from '../../redux/hooks';
import { CloseIcon } from '../ui/icons/CloseIcon';
import { IconButton } from '../ui/buttons/IconButton';
import { MinusIcon } from '../ui/icons/MinusIcon';
import { PlusIcon } from '../ui/icons/PlusIcon';
import { actions as cartActions } from '../../redux/slices/cartSlice';
import styles from './CartItem.module.scss';

type Props = {
  product: Product;
  handleTotal: (sum: number) => void;
};

export const CartItem: React.FC<Props> = ({ product, handleTotal }) => {
  const { name, price, image } = product;
  const [quantity, setQuantity] = useState<number>(1);

  const dispatch = useAppDispatch();

  const totalAmount = quantity * price;

  const handlerDecreaseQuantity = () => {
    setQuantity((prev) => {
      return prev === 1 ? 1 : prev - 1;
    });
    dispatch(cartActions.decreaseQuantity());
    handleTotal(-price);
  };

  const handlerIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
    dispatch(cartActions.increaseQuantity());
    handleTotal(price);
  };

  return (
    <div className={styles.cart}>
      <div className={styles.cartInfo}>
        <div className={styles.cartItem}>
          <button className={styles.removeButton}>
            <CloseIcon />
          </button>
          <img src={image} alt={`${name} photo`} className={styles.cartImage} />
        </div>
        <div className={styles.productName}>{name}</div>
      </div>
      <div className={styles.quantityControl}>
        <div className={styles.quantity}>
          <div className={cn({ [styles.onButton]: quantity > 1 })}>
            <IconButton
              onClick={handlerDecreaseQuantity}
              classNames={styles.iconButton}
              isDisabled={quantity === 1}
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
