import styles from './ItemSpecSkeleton.module.scss';

export function ItemSpecSkeleton() {
  return (
    <div className={styles.specs}>
      <h2 className={styles.title}>Tech specs</h2>
      <div className={styles.border} />

      <div className={styles.container}>
        <div className={styles.text}>
          <p className={styles.subtitle}>Screen</p>
          <div className={styles.params} />
        </div>

        <div className={styles.text}>
          <p className={styles.subtitle}>Resolution</p>
          <div className={styles.params} />
        </div>

        <div className={styles.text}>
          <p className={styles.subtitle}>Processor</p>
          <div className={styles.params} />
        </div>

        <div className={styles.text}>
          <p className={styles.subtitle}>RAM</p>
          <div className={styles.params} />
        </div>

        <div className={styles.text}>
          <p className={styles.subtitle}>Built in memory</p>
          <div className={styles.params} />
        </div>

        <div className={styles.text}>
          <p className={styles.subtitle}>Camera</p>
          <div className={styles.params} />
        </div>

        <div className={styles.text}>
          <p className={styles.subtitle}>Zoom</p>
          <div className={styles.params} />
        </div>

        <div className={styles.text}>
          <p className={styles.subtitle}>Cell</p>
          <div className={styles.params} />
        </div>
      </div>
    </div>
  );
}
