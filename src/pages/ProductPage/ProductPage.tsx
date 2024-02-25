import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getSuggestedProducts } from '../../api/products';
import { Product } from '../../types/Product';
import { SliderCard } from '../../components/ui/slider/SliderCard';
import { ItemOptions } from '../../components/ItemOptions/ItemOptions';
import { ItemAbout } from '../../components/ItemAbout';
import { ItemSpech } from '../../components/ItemSpec';

import styles from './ProductPage.module.scss';

export const ProductPage: React.FC = () => {
  const [suggestedProducts, setSuggestedProducts] = useState<Product[]>([]);
  const { state } = useLocation();

  useEffect(() => {
    getSuggestedProducts(state.data).then(setSuggestedProducts);
  }, [state.data]);

  return (
    <div className={styles.wrapper}>
      <ItemOptions />
      <div className={styles.container}>
        <ItemAbout />
        <ItemSpech />
      </div>
      <SliderCard title="You may also like" items={suggestedProducts} id={1} />
    </div>
  );
};
