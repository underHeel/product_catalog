import React from 'react';
import { ErrorComponent } from '../ErrorComponent';

import styles from './ErrorPage.module.scss';

interface Props {
  image: string | undefined;
  errorMessage: string;
}

export const ErrorPage: React.FC<Props> = ({ image, errorMessage }) => {
  return (
    <div className={styles.errorWrapper}>
      <ErrorComponent image={image} errorMessage={errorMessage} />
    </div>
  );
};
