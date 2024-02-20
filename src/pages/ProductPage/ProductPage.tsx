/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ProductPage.module.scss';
import { ArrowRightIcon } from '../../components/ui/icons/ArrowRightIcon';
import { ArrowLeftIcon } from '../../components/ui/icons/ArrowLeftIcon';
import { HomeIcon } from '../../components/ui/icons/HomeIcon';

export const ProductPage: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigateToPhones = () => {
    navigate('/phones');
  };

  const handleNavigateToHome = () => {
    navigate('/');
  };

  return (
    <div>
      <div className={styles.cardWrapper}>
        <div className={styles.headerPath}>
          <div className={styles.homeIcon} onClick={handleNavigateToHome}>
            <HomeIcon />
          </div>
          <ArrowRightIcon />
          <div className={styles.categoryText} onClick={handleNavigateToPhones}>
            Phones
          </div>
          <ArrowRightIcon />
          <div className={styles.productText}>Some Product</div>
        </div>
        <div className={styles.backButton} onClick={handleNavigateToPhones}>
          <ArrowLeftIcon fill="#0F0F11" />
          <div className={styles.backText}>Back</div>
        </div>
      </div>
    </div>
  );
};
