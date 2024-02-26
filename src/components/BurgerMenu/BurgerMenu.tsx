/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { useAppSelector } from '../../redux/hooks';
import { CartIcon } from '../ui/icons/CartIcon';
import { FavoriteIcon } from '../ui/icons/FavoriteIcon';
import Logo from '/img/Logo.png';
import LogoDark from '/img/LogoDark.png';
import { CloseIcon } from '../ui/icons/CloseIcon';
import { NavBar } from '../NavBar';
import styles from './BurgerMenu.module.scss';
import { Badge } from '../ui/badge';

interface Props {
  toggleMenu: () => void;
  isMenuOpen: boolean;
}

export const BurgerMenu: React.FC<Props> = ({ toggleMenu, isMenuOpen }) => {
  const { productsList } = useAppSelector((state) => state.cart);
  const { theme } = useAppSelector((state) => state.theme);

  return (
    <div className={cn(styles.menu, { [styles.show]: isMenuOpen })}>
      <section className={styles.header}>
        <Link to="/" className={styles.link}>
          <img
            src={theme === 'light' ? Logo : LogoDark}
            alt="header_logo"
            className={styles.logo}
          />
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

          <Link
            to="/cart"
            className={cn(styles.box, styles.cart)}
            onClick={toggleMenu}
          >
            {productsList.length !== 0 ? (
              <Badge value={productsList.length}>
                <CartIcon className={styles.icon} />
              </Badge>
            ) : (
              <CartIcon className={styles.icon} />
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};
