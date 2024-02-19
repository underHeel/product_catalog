import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import Logo from '../../../public/img/Logo.png';
import { BurgerIcon } from '../ui/icons/BurgerIcon';
import { CartIcon } from '../ui/icons/CartIcon';
import { FavoriteIcon } from '../ui/icons/FavoriteIcon';
import { NavBar } from '../NavBar/NavBar';

export const Header: React.FC = () => {
  return (
    <>
      <header className={styles.header}>
        <Link to="/" className={styles.link}>
          <img src={Logo} alt="header_logo" className={styles.logo} />
        </Link>

        <NavBar />

        <div className={styles.icons}>
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
