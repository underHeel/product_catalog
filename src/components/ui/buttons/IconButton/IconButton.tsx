import React from 'react';
import cn from 'classnames';
import styles from './IconButton.module.scss';

interface Props {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent) => void;
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
  const handleClick = (event: React.MouseEvent) => {
    if (onClick) {
      onClick(event);
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
