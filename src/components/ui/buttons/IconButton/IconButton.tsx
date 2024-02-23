import React from 'react';
import cn from 'classnames';
import styles from './IconButton.module.scss';

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  size?: 'small' | 'large';
  classNames?: string;
  isDisabled?: boolean;
}

export const IconButton: React.FC<Props> = ({
  children,
  onClick,
  size = 'small',
  classNames,
  isDisabled,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      type="button"
      className={cn(styles.iconButton, styles[size], classNames)}
      onClick={handleClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};
