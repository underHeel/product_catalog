/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import cn from 'classnames';
import { ThemeContext } from '../../context/ThemeContext';
import { useAppSelector } from '../../redux/hooks';
import { BurgerIcon } from '../ui/icons/BurgerIcon';
import { CartIcon } from '../ui/icons/CartIcon';
import { FavoriteIcon } from '../ui/icons/FavoriteIcon';
import { NavBar } from '../NavBar/NavBar';
import { BurgerMenu } from '../BurgerMenu';
import { Badge } from '../ui/badge';
import { Toggle } from '../ui/buttons/Toggle';
import Logo from '/img/Logo.png';
import LogoDark from '/img/LogoDark.png';
import styles from './Header.module.scss';

interface Props {
  onThemeChange: () => void;
}

export const Header: React.FC<Props> = ({ onThemeChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useContext(ThemeContext);

  const { favoritesList } = useAppSelector((state) => state.favorites);
  const { productsList } = useAppSelector((state) => state.cart);

  const itemsCount = productsList.reduce((acc, cur) => acc + cur.count, 0);

  const toggleMenu = () => {
    const { body } = document;

    if (!isMenuOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = '';
    }

    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  return (
    <>
      <header className={cn(styles.header, { [styles.isSticky]: !isMenuOpen })}>
        <div className={styles.headerContainer}>
          <div className={styles.headerWrapper}>
            <Link to="/" className={styles.link}>
              <img
                src={theme === 'light' ? Logo : LogoDark}
                alt="header_logo"
                className={styles.logo}
              />
            </Link>
            <NavBar />
            <div className={styles.themeToggleWrapper}>
              <Toggle onClick={onThemeChange} />
            </div>
            <div className={styles.icons}>
              <div className={styles.burger} onClick={toggleMenu}>
                <BurgerIcon />
              </div>
              <Link
                to="/favourites"
                className={cn(styles.container, styles.favourite)}
              >
                {favoritesList.length > 0 ? (
                  <Badge value={favoritesList.length}>
                    <FavoriteIcon className={styles.icon} />
                  </Badge>
                ) : (
                  <FavoriteIcon className={styles.icon} />
                )}
              </Link>
              <Link to="/cart" className={cn(styles.container, styles.cart)}>
                {itemsCount !== 0 ? (
                  <Badge value={itemsCount}>
                    <CartIcon className={styles.icon} />
                  </Badge>
                ) : (
                  <CartIcon className={styles.icon} />
                )}
              </Link>
            </div>
          </div>
        </div>
      </header>
      <BurgerMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
    </>
  );
};
