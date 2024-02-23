import React from 'react';
import styles from './ErrorComponent.module.scss';

interface Props {
  image: string | undefined;
  errorMessage: string;
}

export const ErrorComponent: React.FC<Props> = ({ image, errorMessage }) => {
  return (
    <div className={styles.errorWrapper}>
      <img src={image} alt="" className={styles.errorWrapperImage} />
      <p>{errorMessage}</p>
    </div>
  );
};
