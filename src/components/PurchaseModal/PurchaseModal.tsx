import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './PurchaseModal.module.scss';
import { Button } from '../ui/buttons/Button';

interface Props {
  isOpen: boolean;
}

export const PurchaseModal: React.FC<Props> = ({ isOpen }) => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
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
