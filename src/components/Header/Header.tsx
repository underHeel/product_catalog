/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Link } from 'react-router-dom';
import { useState } from 'react';
import cn from 'classnames';
import Logo from '/img/Logo.png';
import { useAppSelector } from '../../redux/hooks';
import { BurgerIcon } from '../ui/icons/BurgerIcon';
import { CartIcon } from '../ui/icons/CartIcon';
import { FavoriteIcon } from '../ui/icons/FavoriteIcon';
import { NavBar } from '../NavBar/NavBar';
import { BurgerMenu } from '../BurgerMenu';
import { Badge } from '../ui/badge';
import styles from './Header.module.scss';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { productsList } = useAppSelector((state) => state.cart);
  const itemsCount = productsList.reduce((acc, cur) => acc + cur.count, 0);

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.headerWrapper}>
            <Link to="/" className={styles.link}>
              <img src={Logo} alt="header_logo" className={styles.logo} />
            </Link>
            <NavBar />
            <div className={styles.icons}>
              <div className={styles.burger} onClick={toggleMenu}>
                <BurgerIcon />
              </div>
              <Link to="/" className={cn(styles.container, styles.favourite)}>
                <FavoriteIcon className={styles.icon} />
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
