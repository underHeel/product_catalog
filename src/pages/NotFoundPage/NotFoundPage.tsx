import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/buttons/Button';
import styles from './NotFoundPage.module.scss';
import notFoundImg from '/img/404.png';

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigateToHome = () => {
    navigate('/');
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <img src={notFoundImg} alt="backImg" className={styles.image} />
        <div className={styles.mainLetters}>Page Not Found</div>
        <div className={styles.buttonWrapper}>
          <Button variant="contained" onClick={handleNavigateToHome}>
            Go home
          </Button>
        </div>
      </div>
    </div>
  );
};
