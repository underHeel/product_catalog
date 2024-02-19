import React from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';

interface Props {
  displayMobile?: boolean | undefined;
  toggleMenu?: () => void;
}

export const NavBar: React.FC<Props> = ({ displayMobile, toggleMenu }) => {
  const isActiveLink = ({ isActive }: { isActive: boolean }) =>
    cn(styles.link, {
      [styles.active]: isActive,
    });

  const handleClick = () => {
    if (toggleMenu) {
      toggleMenu();
    }
  };

  return (
    <nav
      className={styles.nav}
      style={{ display: displayMobile ? 'flex' : '' }}
    >
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink to="/" onClick={handleClick} className={isActiveLink}>
            HOME
          </NavLink>
        </li>

        <li className={styles.item}>
          <NavLink to="/phones" onClick={handleClick} className={isActiveLink}>
            PHONES
          </NavLink>
        </li>

        <li className={styles.item}>
          <NavLink to="/tablets" onClick={handleClick} className={isActiveLink}>
            TABLETS
          </NavLink>
        </li>

        <li className={styles.item}>
          <NavLink
            to="/accessories"
            onClick={handleClick}
            className={isActiveLink}
          >
            ACCESSORIES
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
