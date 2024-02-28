/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import cn from 'classnames';
import { ThemeContext } from '../../../../context/ThemeContext';
import { SunIcon } from '../../icons/SunIcon';
import styles from './Toggle.module.scss';
import { MoonIcon } from '../../icons/MoonIcon';

interface Props {
  onClick: () => void;
}

export const Toggle: React.FC<Props> = ({ onClick }) => {
  const { theme } = useContext(ThemeContext);

  const handleToggle = () => {
    onClick();
  };

  return (
    <div className={styles.wrapper}>
      {theme === 'dark' ? <MoonIcon /> : <SunIcon />}

      <div className={styles.toggleWrapper} onClick={handleToggle}>
        <div
          className={cn(styles.ball, { [styles.isChecked]: theme === 'dark' })}
        />
      </div>
    </div>
  );
};
