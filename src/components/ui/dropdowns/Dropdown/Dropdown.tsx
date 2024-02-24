/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState, useRef } from 'react';
import cn from 'classnames';
import { Select } from 'src/types/Select';
import styles from './Dropdown.module.scss';
import { ArrowDownIcon } from '../../icons/ArrowDownIcon';

interface Props {
  options: Select[];
  description: string;
  value: string;
  onSelect: (selectedOption: string) => void;
}

export const Dropdown: React.FC<Props> = ({
  options,
  description,
  value,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>(value);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdownWrapper} ref={dropdownRef}>
      <span className={styles.description}>{description}</span>
      <div className={styles.dropdown}>
        <div
          className={styles.selectedOption}
          onClick={() => setIsOpen(!isOpen)}
        >
          {options.find((option) => option.value === selectedOption)?.label}

          <div className={cn(styles.iconWrapper, { [styles.open]: isOpen })}>
            <ArrowDownIcon />
          </div>
        </div>
        {isOpen && (
          <ul className={styles.options}>
            {options.map((option) => (
              <li
                key={option.value}
                onClick={() => handleSelect(option.value)}
                className={cn(styles.option, {
                  [styles.selected]: selectedOption === option.value,
                })}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
