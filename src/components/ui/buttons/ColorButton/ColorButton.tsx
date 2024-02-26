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
  yellow: '#FFD700',
  white: '#f0f0f0',
  purple: '#9195f6',
  spacegray: '#4f5b66',
  midnightgreen: '#004953',
  gold: '	#ffdc73',
  silver: '#c0c0c0',
  rosegold: '#f8b996',
  coral: '#f88379 ',
  midnight: '#000E34',
  graphite: '#605D53',
  sierrablue: '#BFDAF7',
  spaceblack: '404140',
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
        style={{ backgroundColor: colorMap[color] || `${color}` }}
      />
    </button>
  );
};
