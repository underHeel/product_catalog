import React from 'react';
import cn from 'classnames';
import styles from './IconButton.module.scss';

interface Props {
  children: React.ReactNode;
  onClick: () => void;
  size?: 'small' | 'large';
  classNames?: string;
  isFilled?: boolean;
  isDisabled?: boolean;
}

export const IconButton: React.FC<Props> = ({
  children,
  onClick,
  size = 'small',
  classNames,
  isFilled,
  isDisabled,
}) => {
  return (
    <button
      type="button"
      className={cn(
        styles.iconButton,
        { [styles.filled]: isFilled },
        styles[size],
        classNames,
      )}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};
