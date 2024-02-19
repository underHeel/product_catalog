import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/buttons/Button';
import styles from './NotFoundPage.module.scss';

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigateToHome = () => {
    navigate('/');
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles['main-numbers']}>404</div>
        <div className={styles['main-letters']}>
          Page not found. Try again later
        </div>
        <div className={styles['button-wrapper']}>
          <Button
            // eslint-disable-next-line react/no-children-prop
            children="Go Home"
            variant="contained"
            onClick={handleNavigateToHome}
          />
        </div>
      </div>
    </div>
  );
};
