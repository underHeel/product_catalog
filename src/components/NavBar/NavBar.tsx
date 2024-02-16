import styles from './NavBar.module.scss';

export const NavBar: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <a href="/">Logo</a>
      <ul>
        <li className={styles.active}>
          <a href="./Home">Home</a>
        </li>
        <li>
          <a href="./phones">Phones</a>
        </li>
        <li>
          <a href="./Tablets">Tablets</a>
        </li>
        <li>
          <a href="./Accessories">Accessories</a>
        </li>
      </ul>
    </nav>
  );
};
