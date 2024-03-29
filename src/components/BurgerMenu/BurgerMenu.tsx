/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { ThemeContext } from '../../context/ThemeContext';
import { useAppSelector } from '../../redux/hooks';
import { CartIcon } from '../ui/icons/CartIcon';
import { FavoriteIcon } from '../ui/icons/FavoriteIcon';
import Logo from '/img/Logo.png';
import LogoDark from '/img/LogoDark.png';
import { CloseIcon } from '../ui/icons/CloseIcon';
import { NavBar } from '../NavBar';
import { Badge } from '../ui/badge';
import styles from './BurgerMenu.module.scss';

interface Props {
  toggleMenu: () => void;
  isMenuOpen: boolean;
}

export const BurgerMenu: React.FC<Props> = ({ toggleMenu, isMenuOpen }) => {
  const { productsList } = useAppSelector((state) => state.cart);
  const { favoritesList } = useAppSelector((state) => state.favorites);
  const { theme } = useContext(ThemeContext);

  return (
    <div className={cn(styles.menu, { [styles.show]: isMenuOpen })}>
      <section className={styles.header}>
        <Link to="/" className={styles.link} onClick={toggleMenu}>
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
          <Link
            to="/favourites"
            className={cn(styles.box, styles.favourite)}
            onClick={toggleMenu}
          >
            {favoritesList.length !== 0 ? (
              <Badge value={favoritesList.length}>
                <FavoriteIcon className={styles.icon} />
              </Badge>
            ) : (
              <FavoriteIcon className={styles.icon} />
            )}
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
