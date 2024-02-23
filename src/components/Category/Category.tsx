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
          <img
            src={phonesCategory}
            alt="phones category"
            className={styles.image}
          />
          <div className={styles.cardTitle}>
            <p className={styles.categoryName}>Mobile phones</p>
            <p className={styles.categoryLength}>95 models</p>
          </div>
        </Link>

        <Link to="/tablets">
          <img
            src={tabletCategory}
            alt="tablet category"
            className={styles.image}
          />
          <div>
            <p className={styles.categoryName}>Tablets</p>
            <p className={styles.categoryLength}>24 models</p>
          </div>
        </Link>

        <Link to="/accessories">
          <img
            src={accessoriesCategory}
            alt="accessories category"
            className={styles.image}
          />
          <div>
            <p className={styles.categoryName}>Accessories</p>
            <p className={styles.categoryLength}>100 models</p>
          </div>
        </Link>
      </div>
    </section>
  );
};