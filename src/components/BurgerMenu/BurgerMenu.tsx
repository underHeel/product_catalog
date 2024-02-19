/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { Link } from 'react-router-dom';
import { CartIcon } from '../ui/icons/CartIcon';
import { FavoriteIcon } from '../ui/icons/FavoriteIcon';
import styles from './BurgerMenu.module.scss';
import Logo from '../../../public/img/Logo.png';
import { CloseIcon } from '../ui/icons/CloseIcon';
import { NavBar } from '../NavBar';

interface Props {
  toggleMenu: () => void;
  isMenuOpen: boolean;
}

export const BurgerMenu: React.FC<Props> = ({ toggleMenu, isMenuOpen }) => {
  return (
    <div className={styles.menu}>
      <section className={styles.header}>
        <Link to="/" className={styles.link}>
          <img src={Logo} alt="header_logo" className={styles.logo} />
        </Link>

        <div
          className={`${styles.container} ${styles.close}`}
          onClick={toggleMenu}
        >
          <CloseIcon />
        </div>
      </section>

      <div
        className={`${styles.menuBody} ${isMenuOpen ? styles.show : styles.hide}}`}
      >
        <NavBar displayMobile />

        <div className={styles.icons}>
          <Link to="/" className={`${styles.box} ${styles.favourite} `}>
            <FavoriteIcon className={styles.icon} />
          </Link>

          <Link to="/" className={`${styles.box} ${styles.cart} `}>
            <CartIcon className={styles.icon} />
          </Link>
        </div>
      </div>
    </div>
  );
};
