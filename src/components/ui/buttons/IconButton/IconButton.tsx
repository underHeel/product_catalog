import React from 'react';
import cn from 'classnames';
import styles from './IconButton.module.scss';

interface Props {
  children: React.ReactNode;
  onClick: () => void;
  isSelected?: boolean;
}

export const IconButton: React.FC<Props> = ({
  children,
  onClick,
  isSelected,
}) => {
  return (
    <button
      type="button"
      className={cn(styles.iconButton, { [styles.selected]: isSelected })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
