import styles from './CardSkeleton.module.scss';

export const CardSkeleton = () => (
  <div className={`${styles.tempCard} ${styles.skeleton}`}>
    <div className={styles.image} />
    <div className={styles.title} />
    <div className={styles.price}>
      <div className={styles.price1} />
      <div className={styles.price2} />
    </div>
    <div className={styles.specs} />
    <div className={styles.specs} />
    <div className={styles.specs} />
    <div className={styles.buttons}>
      <div className={styles.buy} />
      <div className={styles.addFavourite} />
    </div>
  </div>
);
