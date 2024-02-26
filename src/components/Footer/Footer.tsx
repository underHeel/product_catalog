import { Link } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import styles from './Footer.module.scss';
import { IconButton } from '../ui/buttons/IconButton';
import { ArrowUpIcon } from '../ui/icons/ArrowUpIcon';
import Logo from '/img/Logo.png';
import LogoDark from '/img/LogoDark.png';
import { PreviewWindow } from './PreviewWindow';

export const Footer = () => {
  const { theme } = useAppSelector((state) => state.theme);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.footerWrapper}>
      <footer className={styles.footer}>
        <div className={styles.logo}>
          <Link to="/" className={styles.link}>
            <img
              src={theme === 'light' ? Logo : LogoDark}
              alt="header_logo"
              className={styles.image}
            />
          </Link>
        </div>
        <div className={styles.additional}>
          <PreviewWindow />
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
        <div className={styles.button}>
          <button type="button" className={styles.text} onClick={scrollToTop}>
            Back to top
          </button>
          <IconButton onClick={scrollToTop} classNames={styles.iconButton}>
            <ArrowUpIcon fill="var(--color)" />
          </IconButton>
        </div>
      </footer>
    </div>
  );
};
