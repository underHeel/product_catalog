import classNames from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import Logo from '../../../public/images/Logo.png';
import { BurgerIcon } from '../ui/icons/BurgerIcon';
import { CartIcon } from '../ui/icons/CartIcon';
import { FavoriteIcon } from '../ui/icons/FavoriteIcon';

export const Header: React.FC = () => {
  const isActiveLink = ({ isActive }: { isActive: boolean }) =>
    classNames(`${styles.nav__link}`, {
      [styles.nav__border]: isActive,
    });

  return (
    <>
      <header className={styles.header}>
        <Link to="/" className={styles.link}>
          <img src={Logo} alt="header_logo" className={styles.logo} />
        </Link>

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

        <div className={styles.header__icons}>
          <Link to="/" className={`${styles.container} ${styles.burger}`}>
            <BurgerIcon />
          </Link>

          <Link to="/" className={`${styles.container} ${styles.favourite} `}>
            <FavoriteIcon className={styles.icon} />
          </Link>

          <Link to="/" className={`${styles.container} ${styles.cart} `}>
            <CartIcon className={styles.icon} />
          </Link>
        </div>
      </header>
    </>
  );
};
