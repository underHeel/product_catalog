import React from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';

interface Props {
  children: React.ReactNode;
  variant: 'text' | 'contained' | 'outlined';
  onClick: () => void;
}

export const Button: React.FC<Props> = ({ children, onClick, variant }) => {
  return (
    <button
      type="button"
      className={cn(styles.button, styles[variant])}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
