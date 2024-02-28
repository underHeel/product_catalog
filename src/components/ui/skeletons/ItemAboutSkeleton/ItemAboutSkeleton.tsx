import { v4 as uuidv4 } from 'uuid';
import styles from './ItemAboutSkeleton.module.scss';

export function ItemAboutSkeleton() {
  return (
    <section className={styles.about}>
      <div>
        <h3 className={styles.title}>About</h3>
        <div className={styles.borderLine} />
      </div>
      <div className={styles.textArea}>
        {[...Array(3)].map(() => (
          <div className={styles.textBlock} key={uuidv4()}>
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
