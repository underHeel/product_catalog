import React, { useState } from 'react';
import { DetailedProduct } from 'src/types/DetailedProduct';
import styles from './ItemsSpec.module.scss';

interface Props {
  product: DetailedProduct;
}

export const ItemSpech: React.FC<Props> = ({ product }) => {
  const { screen, resolution, processor, ram, capacity, camera, zoom, cell } =
    product;

  const [loading, setLoading] = useState(true);

  setTimeout(() => setLoading(false), 1000);

  return (
    <div className={styles.specs}>
      <h2 className={styles.title}>Tech specs</h2>
      <div className={styles.border} />

      <div className={styles.container}>
        <div className={styles.text}>
          <p className={styles.subtitle}>Screen</p>
          {loading ? (
            <div className={(styles.skeletonContainer, styles.skeleton)} />
          ) : (
            <p className={styles.params}>{screen}</p>
          )}
        </div>

        <div className={styles.text}>
          <p className={styles.subtitle}>Resolution</p>
          {loading ? (
            <div className={(styles.skeletonContainer, styles.skeleton)} />
          ) : (
            <p className={styles.params}>{resolution}</p>
          )}
        </div>

        <div className={styles.text}>
          <p className={styles.subtitle}>Processor</p>
          {loading ? (
            <div className={(styles.skeletonContainer, styles.skeleton)} />
          ) : (
            <p className={styles.params}>{processor}</p>
          )}
        </div>

        <div className={styles.text}>
          <p className={styles.subtitle}>RAM</p>
          {loading ? (
            <div className={(styles.skeletonContainer, styles.skeleton)} />
          ) : (
            <p className={styles.params}>{ram}</p>
          )}
        </div>

        <div className={styles.text}>
          <p className={styles.subtitle}>Built in memory</p>
          {loading ? (
            <div className={(styles.skeletonContainer, styles.skeleton)} />
          ) : (
            <p className={styles.params}>{capacity}</p>
          )}
        </div>

        <div className={styles.text}>
          <p className={styles.subtitle}>Camera</p>
          {loading ? (
            <div className={(styles.skeletonContainer, styles.skeleton)} />
          ) : (
            <p className={styles.params}>{camera}</p>
          )}
        </div>

        <div className={styles.text}>
          <p className={styles.subtitle}>Zoom</p>
          {loading ? (
            <div className={(styles.skeletonContainer, styles.skeleton)} />
          ) : (
            <p className={styles.params}>{zoom}</p>
          )}
        </div>

        <div className={styles.text}>
          <p className={styles.subtitle}>Cell</p>
          {loading ? (
            <div className={(styles.skeletonContainer, styles.skeleton)} />
          ) : (
            <p className={styles.params}>{cell.join(', ')}</p>
          )}
        </div>
      </div>
    </div>
  );
};
