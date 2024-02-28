import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import phonesCategory from '/img/phone-block.png';
import tabletCategory from '/img/tablet-block.png';
import accessoriesCategory from '/img/accessories-block.png';
import styles from './Category.module.scss';

export const Category: React.FC = () => {
  const { phones, loading: phonesLoading } = useAppSelector(
    (state) => state.phones,
  );
  const { tablets, loading: tabletsLoading } = useAppSelector(
    (state) => state.tablets,
  );
  const { accessories, loading: accessoriesLoading } = useAppSelector(
    (state) => state.accessories,
  );

  const isSkeletonDisplayed =
    phonesLoading || tabletsLoading || accessoriesLoading;

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
            {isSkeletonDisplayed ? (
              <div className={styles.categoryLoading} />
            ) : (
              <p
                className={styles.categoryLength}
              >{`${phones.length} models`}</p>
            )}
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
            {isSkeletonDisplayed ? (
              <div className={styles.categoryLoading} />
            ) : (
              <p
                className={styles.categoryLength}
              >{`${tablets.length} models`}</p>
            )}
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
            {isSkeletonDisplayed ? (
              <div className={styles.categoryLoading} />
            ) : (
              <p
                className={styles.categoryLength}
              >{`${accessories.length} models`}</p>
            )}
          </div>
        </Link>
      </div>
    </section>
  );
};
