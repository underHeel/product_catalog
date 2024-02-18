/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useState } from 'react';
import cn from 'classnames';
import styles from './Dropdown.module.scss';
import { ArrowDownIcon } from '../../icons/ArrowDownIcon';

interface Props {
  options: string[];
  description: string;
}

export const Dropdown: React.FC<Props> = ({ options, description }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdownWrapper}>
      <span className={styles.description}>{description}</span>
      <div className={styles.dropdown}>
        <div
          className={styles.selectedOption}
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption || 'Select an option'}

          <div className={cn(styles.iconWrapper, { [styles.open]: isOpen })}>
            <ArrowDownIcon />
          </div>
        </div>
        {isOpen && (
          <ul className={styles.options}>
            {options.map((option) => (
              <li
                key={option}
                onClick={() => handleSelect(option)}
                className={cn(styles.option, {
                  [styles.selected]: selectedOption === option,
                })}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
