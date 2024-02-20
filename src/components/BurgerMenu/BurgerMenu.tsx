/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { CartIcon } from '../ui/icons/CartIcon';
import { FavoriteIcon } from '../ui/icons/FavoriteIcon';
import Logo from '/img/Logo.png';
import { CloseIcon } from '../ui/icons/CloseIcon';
import { NavBar } from '../NavBar';
import styles from './BurgerMenu.module.scss';

interface Props {
  toggleMenu: () => void;
  isMenuOpen: boolean;
}

export const BurgerMenu: React.FC<Props> = ({ toggleMenu, isMenuOpen }) => {
  return (
    <div className={cn(styles.menu, { [styles.show]: isMenuOpen })}>
      <section className={styles.header}>
        <Link to="/" className={styles.link}>
          <img src={Logo} alt="header_logo" className={styles.logo} />
        </Link>

        <div className={styles.close} onClick={toggleMenu}>
          <CloseIcon />
        </div>
      </section>

      <div className={styles.menuBody}>
        <NavBar displayMobile toggleMenu={toggleMenu} />

        <div className={styles.icons}>
          <Link to="/" className={cn(styles.box, styles.favourite)}>
            <FavoriteIcon className={styles.icon} />
          </Link>

          <Link to="/cart" className={cn(styles.box, styles.cart)}>
            <CartIcon className={styles.icon} />
          </Link>
        </div>
      </div>
    </div>
  );
};
