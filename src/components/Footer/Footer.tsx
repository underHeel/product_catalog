import styles from './Footer.module.scss';
import NiceGadgetsLogo from '../../images/nice-gadgets.png';
import NiceGadgetsOk from '../../images/nice-gadgets-ok.png';
import ButtonCircle from '../../images/buttons/go-to-top/circle.png';
import ButtonArrow from '../../images/buttons/go-to-top/arrow-up.png';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__left}>
        <img src={NiceGadgetsLogo} alt="Logo" className={styles.footer__logo} />
        <img src={NiceGadgetsOk} alt="LogoOk" className={styles.footer__logo} />
      </div>
      <div className={styles.footer__center}>
        <a href="https://github.com" className={styles.footer__link}>
          GITHUB
        </a>
        <a href="/contacts" className={styles.footer__link}>
          CONTACTS
        </a>
        <a href="/contacts" className={styles.footer__link}>
          RIGHTS
        </a>
      </div>
      <div className={styles.footer__button}>
        <a href="/" className={styles.footer__link}>
          Back to top
        </a>
        <button type="submit" className={styles.footer__arrow}>
          <div className={styles.container}>
            <img
              src={ButtonArrow}
              alt="ButtonArrow"
              className={styles.inner_image}
            />
            <img
              src={ButtonCircle}
              alt="ButtonCircle"
              className={styles.outer_image}
            />
          </div>
        </button>
      </div>
    </footer>
  );
};
