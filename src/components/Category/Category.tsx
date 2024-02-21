import React from 'react';
import styles from './Category.module.scss';
import phonesCategory from '../../../public/img/category-phones.png';
import tabletCategory from '../../../public/img/category-tablets.png';
import accessoriesCategory from '../../../public/img/category-accessories.png';

export const Category: React.FC = () => {
  return (
    <section>
      <h2 className={styles.secondTitle}>Shop by category</h2>
      <img src={phonesCategory} alt="phones category" />
      <img src={tabletCategory} alt="tablet category" />
      <img src={accessoriesCategory} alt="accessories category" />
    </section>
  );
};
