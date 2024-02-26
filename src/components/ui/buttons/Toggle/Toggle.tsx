/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import cn from 'classnames';
import { SunIcon } from '../../icons/SunIcon';
import styles from './Toggle.module.scss';
import { MoonIcon } from '../../icons/MoonIcon';

interface Props {
  onClick: () => void;
}

export const Toggle: React.FC<Props> = ({ onClick }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked((prev) => !prev);
    onClick();
  };

  return (
    <div className={styles.wrapper}>
      {isChecked ? <MoonIcon /> : <SunIcon />}

      <div className={styles.toggleWrapper} onClick={handleToggle}>
        <div className={cn(styles.ball, { [styles.isChecked]: isChecked })} />
      </div>
    </div>
  );
};
