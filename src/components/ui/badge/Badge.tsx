import React from 'react';
import styles from './Badge.module.scss';

interface Props {
  children: React.ReactNode;
  value: number;
}

export const Badge: React.FC<Props> = ({ children, value }) => {
  return (
    <div className={styles.badgeWrapper}>
      <div className={styles.badge}>{value}</div>
      {children}
    </div>
  );
};
