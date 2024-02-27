import styles from './ItemSpecSkeleton.module.scss';

export function ItemSpecSkeleton() {
  return (
    <div className={styles.specs}>
      <div className={styles.title} />
      <div className={styles.border} />

      <div className={styles.container}>
        <div className={styles.text}>
          <div className={styles.subtitle} />
          <div className={styles.params} />
        </div>

        <div className={styles.text}>
          <div className={styles.subtitle} />
          <div className={styles.params} />
        </div>

        <div className={styles.text}>
          <div className={styles.subtitle} />
          <div className={styles.params} />
        </div>

        <div className={styles.text}>
          <div className={styles.subtitle} />
          <div className={styles.params} />
        </div>

        <div className={styles.text}>
          <div className={styles.subtitle} />
          <div className={styles.params} />
        </div>

        <div className={styles.text}>
          <div className={styles.subtitle} />
          <div className={styles.params} />
        </div>

        <div className={styles.text}>
          <div className={styles.subtitle} />
          <div className={styles.params} />
        </div>

        <div className={styles.text}>
          <div className={styles.subtitle} />
          <div className={styles.params} />
        </div>
      </div>
    </div>
  );
}
