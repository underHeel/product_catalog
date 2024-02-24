/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState, useRef } from 'react';
import cn from 'classnames';
import styles from './Dropdown.module.scss';
import { ArrowDownIcon } from '../../icons/ArrowDownIcon';

interface Select {
  key: string;
  label: string;
}

interface Props {
  options: Select[];
  description: string;
  onSelect: (selectedOption: string) => void;
}

export const Dropdown: React.FC<Props> = ({
  options,
  description,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>(
    options[0].label,
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    onSelect(selectedOption);
  }, [selectedOption, onSelect]);

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
          {selectedOption}

          <div className={cn(styles.iconWrapper, { [styles.open]: isOpen })}>
            <ArrowDownIcon />
          </div>
        </div>
        {isOpen && (
          <ul className={styles.options}>
            {options.map(({ key, label }) => (
              <li
                key={key}
                onClick={() => handleSelect(label)}
                className={cn(styles.option, {
                  [styles.selected]: selectedOption === label,
                })}
              >
                {label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
