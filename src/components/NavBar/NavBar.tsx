import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';

export const NavBar: React.FC = () => {
  const isActiveLink = ({ isActive }: { isActive: boolean }) =>
    classNames(styles.link, {
      [styles.active]: isActive,
    });

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink to="/" className={isActiveLink}>
            HOME
          </NavLink>
        </li>

        <li className={styles.item}>
          <NavLink to="/phones" className={isActiveLink}>
            PHONES
          </NavLink>
        </li>

        <li className={styles.item}>
          <NavLink to="/tablets" className={isActiveLink}>
            TABLETS
          </NavLink>
        </li>

        <li className={styles.item}>
          <NavLink to="/accessories" className={isActiveLink}>
            ACCESSORIES
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
