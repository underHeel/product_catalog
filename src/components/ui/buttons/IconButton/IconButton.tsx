import React from 'react';
import cn from 'classnames';
import styles from './IconButton.module.scss';

interface Props {
  children: React.ReactNode;
  onClick: () => void;
  isFilled?: boolean;
  isDisabled?: boolean;
}

export const IconButton: React.FC<Props> = ({
  children,
  onClick,
  isFilled,
  isDisabled,
}) => {
  return (
    <button
      type="button"
      className={cn(styles.iconButton, { [styles.filled]: isFilled })}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};
