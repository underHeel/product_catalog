import React from 'react';
import { DetailedProduct } from '../../types/DetailedProduct';
import styles from './ItemAbout.module.scss';

interface Props {
  product: DetailedProduct;
}

export const ItemAbout: React.FC<Props> = ({ product }) => {
  const { description } = product;

  return (
    <section className={styles.about}>
      <div>
        <h2 className={styles.title}>About</h2>
        <div className={styles.borderLine} />
      </div>
      <div className={styles.textArea}>
        {description.map(({ title, text }) => (
          <div className={styles.textBlock} key={title}>
            <h3 className={styles.subtitle}>{title}</h3>
            <p className={styles.paragraph}>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
