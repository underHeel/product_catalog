import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import styles from './Category.module.scss';
import phonesCategory from '/img/phone-block.png';
import tabletCategory from '/img/tablet-block.png';
import accessoriesCategory from '/img/accessories-block.png';

export const Category: React.FC = () => {
  const { phones } = useAppSelector((state) => state.phones);

  return (
    <section>
      <h2 className={styles.title}>Shop by category</h2>
      <div className={styles.container}>
        <Link to="/phones?page=1" className={styles.box}>
          <img
            src={phonesCategory}
            alt="phones category"
            className={styles.image}
          />
          <div className={styles.cardTitle}>
            <p className={styles.categoryName}>Mobile phones</p>
            <p className={styles.categoryLength}>{`${phones.length} models`}</p>
          </div>
        </Link>

        <Link to="/tablets" className={styles.box}>
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

        <Link to="/accessories" className={styles.box}>
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
