/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import cn from 'classnames';
import styles from './ColorButton.module.scss';

interface Props {
  color: string;
  onClick: () => void;
  classNames?: string;
  isSelected?: boolean;
}

const colorMap: Record<string, string> = {
  black: '#4c4c4c',
  green: '#5f7170',
  yellow: '#fcdbc1',
  white: '#f0f0f0',
  purple: '#9195f6',
};

export const ColorButton: React.FC<Props> = ({
  onClick,
  classNames,
  isSelected,
  color,
}) => {
  return (
    <button
      type="button"
      className={cn(
        styles.colorButton,
        { [styles.selected]: isSelected },
        classNames,
      )}
      onClick={onClick}
    >
      <div
        className={styles.colorWrapper}
        style={{ backgroundColor: colorMap[color] }}
      />
    </button>
  );
};
