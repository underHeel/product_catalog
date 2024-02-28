import React from 'react';
import { DetailedProduct } from 'src/types/DetailedProduct';
import styles from './ItemsSpec.module.scss';

interface Props {
  product: DetailedProduct;
}

export const ItemSpech: React.FC<Props> = ({ product }) => {
  const { screen, resolution, processor, ram, capacity, camera, zoom, cell } =
    product;

  return (
    <div className={styles.specs}>
      <h2 className={styles.title}>Tech specs</h2>
      <div className={styles.border} />

      <div className={styles.container}>
        <div className={styles.text}>
          <p className={styles.subtitle}>Screen</p>
          <p className={styles.params}>{screen}</p>
        </div>

        <div className={styles.text}>
          <p className={styles.subtitle}>Resolution</p>
          <p className={styles.params}>{resolution}</p>
        </div>

        <div className={styles.text}>
          <p className={styles.subtitle}>Processor</p>
          <p className={styles.params}>{processor}</p>
        </div>

        <div className={styles.text}>
          <p className={styles.subtitle}>RAM</p>
          <p className={styles.params}>{ram}</p>
        </div>

        <div className={styles.text}>
          <p className={styles.subtitle}>Built in memory</p>
          <p className={styles.params}>{capacity}</p>
        </div>

        <div className={styles.text}>
          <p className={styles.subtitle}>Camera</p>
          <p className={styles.params}>{camera}</p>
        </div>

        <div className={styles.text}>
          <p className={styles.subtitle}>Zoom</p>
          <p className={styles.params}>{zoom}</p>
        </div>

        <div className={styles.text}>
          <p className={styles.subtitle}>Cell</p>
          <p className={styles.params}>{cell.join(', ')}</p>
        </div>
      </div>
    </div>
  );
};
