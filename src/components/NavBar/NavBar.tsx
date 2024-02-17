import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';

export const NavBar: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to="/">Logo</NavLink>
      <ul>
        <li className={styles.active}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/phones">Phones</NavLink>
        </li>
        <li>
          <NavLink to="/tablets">Tablets</NavLink>
        </li>
        <li>
          <NavLink to="/accessories">Accessories</NavLink>
        </li>
      </ul>
    </nav>
  );
};
