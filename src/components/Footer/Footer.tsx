import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import { IconButton } from '../ui/buttons/IconButton';
import { ArrowUpIcon } from '../ui/icons/ArrowUpIcon';
import Logo from '../../../public/img/Logo.png';

export const Footer = () => {
  return (
    <div className={styles.topBorder}>
      <footer className={styles.footer}>
        <div className={styles.logo}>
          <Link to="/" className={styles.link}>
            <img src={Logo} alt="header_logo" className={styles.image} />
          </Link>
        </div>
        <div className={styles.additional}>
          <a href="https://github.com" className={styles.additionalLink}>
            GITHUB
          </a>
          <a href="/contacts" className={styles.additionalLink}>
            CONTACTS
          </a>
          <a href="/contacts" className={styles.additionalLink}>
            RIGHTS
          </a>
        </div>
        <div className={styles.goTopButton}>
          <div className={styles.button}>
            <Link to="/" className={styles.buttonTop}>
              Back to top
            </Link>
            <IconButton onClick={() => {}}>
              <ArrowUpIcon />
            </IconButton>
          </div>
        </div>
      </footer>
    </div>
  );
};
