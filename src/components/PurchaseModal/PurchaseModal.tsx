import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { Button } from '../ui/buttons/Button';
import { actions as cartActions } from '../../redux/slices/cartSlice';
import styles from './PurchaseModal.module.scss';

interface Props {
  isOpen: boolean;
}

export const PurchaseModal: React.FC<Props> = ({ isOpen }) => {
  const navigate = useNavigate();
  const { productsList } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const goHome = () => {
    navigate('/');
    productsList.forEach(({ id }) => dispatch(cartActions.remove(id)));
  };

  return (
    isOpen && (
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <div className={styles.modalHeader} />
          <p className={styles.modalText}>Thank you for purchase!</p>
          <div className={styles.buttonContainer}>
            <Button variant="contained" onClick={goHome}>
              Go Home
            </Button>
          </div>
        </div>
      </div>
    )
  );
};
