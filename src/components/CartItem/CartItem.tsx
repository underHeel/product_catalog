/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/button-has-type */
import cn from 'classnames';
import { CartItem as CartItemType } from 'src/types/CartItem';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
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

  const handlerDecreaseQuantity = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();

    dispatch(cartActions.decreaseCount(id));
  };

  const handlerIncreaseQuantity = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();

    dispatch(cartActions.increaseCount(id));
  };

  const handleRemove = async (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();

    const result = await Swal.fire({
      title: 'Are u sure?',
      text: 'Do you really want to delete this item?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      customClass: {
        confirmButton: styles.confirmButton,
        cancelButton: styles.cancelButton,
      },
    });

    if (result.isConfirmed) {
      dispatch(cartActions.remove(id));
    }
  };

  return (
    <Link
      to={`/product/${itemId}`}
      state={{ data: category }}
      className={styles.cart}
    >
      <div className={styles.cartInfo}>
        <div className={styles.cartItem}>
          <button className={styles.removeButton} onClick={handleRemove}>
            <CloseIcon />
          </button>
          <img src={image} alt={`${name} photo`} className={styles.cartImage} />
        </div>
        <div className={styles.productName}>{name}</div>
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
    </Link>
  );
};
