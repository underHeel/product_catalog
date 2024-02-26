import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/buttons/Button';
import styles from './PurchaseModal.module.scss';
import { IconButton } from '../ui/buttons/IconButton';
import { CloseIcon } from '../ui/icons/CloseIcon';

interface Props {
  isOpen: boolean;
}

export const PurchaseModal: React.FC<Props> = ({ isOpen }) => {
  const navigate = useNavigate();
  const modalContentRef = useRef<HTMLDivElement>(null);
  const closeModalAndRedirect = () => {
    navigate('/');
  };

  useEffect(() => {
    const handleClickOutsideModal = (event: MouseEvent) => {
      if (
        modalContentRef.current &&
        !modalContentRef.current.contains(event.target as Node)
      ) {
        closeModalAndRedirect();
      }
    };

    document.addEventListener('mousedown', handleClickOutsideModal);

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideModal);
    };
  });

  return (
    isOpen && (
      <div className={styles.modal}>
        <div ref={modalContentRef} className={styles.modalContent}>
          <IconButton
            onClick={closeModalAndRedirect}
            classNames={styles.closeButton}
          >
            <CloseIcon />
          </IconButton>
          <p className={styles.modalText}>Thank you for purchase!</p>
          <div className={styles.buttonContainer}>
            <Button variant="contained" onClick={closeModalAndRedirect}>
              Go Home
            </Button>
          </div>
        </div>
      </div>
    )
  );
};
