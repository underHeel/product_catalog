import React, { useEffect, useState } from 'react';
import { Product } from 'src/types/Product';
import { ProductCard } from '../../components/ProductCard';
import * as api from '../../api/phones';
import styles from './Favourites.module.scss';

export const Favourites: React.FC = () => {
  const [phones, setPhones] = useState<Product[]>([]);
  const testPhone = phones.slice(0, 10);

  useEffect(() => {
    api.getAllPhones().then((res) => setPhones(res));
  }, [phones]);

  return (
    <>
      <h1 className={styles.title}>Favourites</h1>
      <div className={styles.wrapper}>
        {testPhone.map((phone) => (
          <ProductCard key={phone.id} product={phone} />
        ))}
      </div>
    </>
  );
};
