import React from 'react';
import cn from 'classnames';
import styles from './IconButton.module.scss';

interface Props {
  children: React.ReactNode;
  onClick: () => void;
  classNames?: string;
  isFilled?: boolean;
  isDisabled?: boolean;
}

export const IconButton: React.FC<Props> = ({
  children,
  onClick,
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
        classNames,
      )}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};
