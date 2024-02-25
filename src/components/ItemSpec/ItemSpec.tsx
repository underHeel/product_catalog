import React from 'react';
import styles from './ItemsSpec.module.scss';

export const ItemSpech: React.FC = () => {
  return (
    <div className={styles.specs}>
      <h2 className={styles.title}>Tech specs</h2>
      <div className={styles.border} />

      <div className={styles.container}>
        <div className={styles.text}>
          <p className={styles.subtitle}>Screen</p>
          <p className={styles.params}>6.5” OLED</p>
        </div>

        <div className={styles.text}>
          <p className={styles.subtitle}>Resolution</p>
          <p className={styles.params}>2688x1242</p>
        </div>

        <div className={styles.text}>
          <p className={styles.subtitle}>Processor</p>
          <p className={styles.params}>Apple A12 Bionic</p>
        </div>

        <div className={styles.text}>
          <p className={styles.subtitle}>RAM</p>
          <p className={styles.params}>3 GB</p>
        </div>

        <div className={styles.text}>
          <p className={styles.subtitle}>Built in memory</p>
          <p className={styles.params}>64 GB</p>
        </div>

        <div className={styles.text}>
          <p className={styles.subtitle}>Camera</p>
          <p className={styles.params}>12 Mp + 12 Mp + 12 Mp (Triple)</p>
        </div>

        <div className={styles.text}>
          <p className={styles.subtitle}>Zoom</p>
          <p className={styles.params}>Optical, 2x</p>
        </div>

        <div className={styles.text}>
          <p className={styles.subtitle}>Cell</p>
          <p className={styles.params}>GSM, LTE, UMTS</p>
        </div>
      </div>
    </div>
  );
};
