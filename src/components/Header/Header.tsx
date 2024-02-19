import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import Logo from '/img/Logo.png';
import { BurgerIcon } from '../ui/icons/BurgerIcon';
import { CartIcon } from '../ui/icons/CartIcon';
import { FavoriteIcon } from '../ui/icons/FavoriteIcon';
import { NavBar } from '../NavBar/NavBar';
// import { BurgerMenu } from '../BurgerMenu';

interface Props {
  toggleMenu: () => void;
}

export const Header: React.FC<Props> = ({ toggleMenu }) => {
  // const toggleBurgerMenu = () => {
  //   setIsBurgerMenuOpen(!isBurgerMenuOpen);
  // };

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.link}>
        <img src={Logo} alt="header_logo" className={styles.logo} />
      </Link>

      <NavBar />

      <div className={styles.icons}>
        <div
          className={`${styles.container} ${styles.burger}`}
          onClick={toggleMenu}
        >
          <BurgerIcon />
        </div>

        <Link to="/" className={`${styles.container} ${styles.favourite} `}>
          <FavoriteIcon className={styles.icon} />
        </Link>

        <Link to="/" className={`${styles.container} ${styles.cart} `}>
          <CartIcon className={styles.icon} />
        </Link>
      </div>
    </header>
  );
};
