import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Category.module.scss';
import phonesCategory from '/img/phone-block.png';
import tabletCategory from '/img/tablet-block.png';
import accessoriesCategory from '/img/accessories-block.png';

export const Category: React.FC = () => {
  return (
    <section>
      <h2 className={styles.title}>Shop by category</h2>
      <div className={styles.container}>
        <Link to="/phones?page=1">
          <div className={styles.box}>
            <div className={styles.inner}>
              <img
                src={phonesCategory}
                alt="phones category"
                className={styles.image}
              />
            </div>
            <div className={styles.cardTitle}>
              <p className={styles.categoryName}>Mobile phones</p>
              <p className={styles.categoryLength}>95 models</p>
            </div>
          </div>
        </Link>

        <Link to="/tablets">
          <div className={styles.box}>
            <div className={styles.inner}>
              <img
                src={tabletCategory}
                alt="tablet category"
                className={styles.image}
              />
            </div>
            <div>
              <p className={styles.categoryName}>Tablets</p>
              <p className={styles.categoryLength}>24 models</p>
            </div>
          </div>
        </Link>

        <Link to="/accessories">
          <div className={styles.box}>
            <div className={styles.inner}>
              <img
                src={accessoriesCategory}
                alt="accessories category"
                className={styles.image}
              />
            </div>
            <div>
              <p className={styles.categoryName}>Accessories</p>
              <p className={styles.categoryLength}>100 models</p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};
