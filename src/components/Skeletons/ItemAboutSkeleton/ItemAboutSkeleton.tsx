import styles from './ItemAboutSkeleton.module.scss';

export function ItemAboutSkeleton() {
  return (
    <section className={styles.about}>
      <div>
        <div className={styles.title} />
        <div className={styles.borderLine} />
      </div>
      <div className={styles.textArea}>
        {[...Array(3)].map(() => (
          <div className={styles.textBlock}>
            <div className={styles.subtitle} />
            <div className={styles.paragraph}>
              <div className={styles.textLine} />
              <div className={styles.textLine} />
              <div className={styles.textLine} />
              <div className={styles.textLine} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
