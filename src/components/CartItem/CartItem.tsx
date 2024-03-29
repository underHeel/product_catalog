/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/button-has-type */
import cn from 'classnames';
import { CartItem as CartItemType } from 'src/types/CartItem';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';
import { CloseIcon } from '../ui/icons/CloseIcon';
import { IconButton } from '../ui/buttons/IconButton';
import { MinusIcon } from '../ui/icons/MinusIcon';
import { PlusIcon } from '../ui/icons/PlusIcon';
import { actions as cartActions } from '../../redux/slices/cartSlice';
import styles from './CartItem.module.scss';

type Props = {
  product: CartItemType;
};

export const CartItem: React.FC<Props> = ({ product }) => {
  const { name, price, image, id, count, itemId, category } = product;

  const dispatch = useAppDispatch();

  const totalAmount = count * price;

  const handlerDecreaseQuantity = () => {
    dispatch(cartActions.decreaseCount(id));
  };

  const handlerIncreaseQuantity = () => {
    dispatch(cartActions.increaseCount(id));
  };

  const handleRemove = () => {
    dispatch(cartActions.remove(id));
  };

  return (
    <div className={styles.cart}>
      <div className={styles.cartInfo}>
        <div className={styles.cartItem}>
          <button className={styles.removeButton} onClick={handleRemove}>
            <CloseIcon />
          </button>
          <Link to={`/product/${itemId}`} state={{ data: category }}>
            <img
              src={image}
              alt={`${name} photo`}
              className={styles.cartImage}
            />
          </Link>
        </div>
        <Link
          className={styles.productName}
          to={`/product/${itemId}`}
          state={{ data: category }}
        >
          {name}
        </Link>
      </div>

      <div className={styles.quantityControl}>
        <div className={styles.quantity}>
          <div className={cn({ [styles.onButton]: count > 1 })}>
            <IconButton
              onClick={handlerDecreaseQuantity}
              classNames={styles.iconButton}
              isDisabled={count === 1}
            >
              <MinusIcon />
            </IconButton>
          </div>
          <span className={styles.quantityValue}>{count}</span>
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
