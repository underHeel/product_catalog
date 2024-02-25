import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { DetailedProduct } from 'src/types/DetailedProduct';
import { getSuggestedProducts } from 'src/services/getSuggestedProducts';
import { getPhone } from '../../api/products';
import { Product } from '../../types/Product';
import { SliderCard } from '../../components/ui/slider/SliderCard';
import { ItemOptions } from '../../components/ItemOptions/ItemOptions';
import { ItemAbout } from '../../components/ItemAbout';
import { ItemSpech } from '../../components/ItemSpec';

import styles from './ProductPage.module.scss';

export const ProductPage: React.FC = () => {
  const [product, setProduct] = useState<DetailedProduct | null>(null);
  const [suggestedProducts, setSuggestedProducts] = useState<Product[]>([]);
  const { state, pathname } = useLocation();

  const itemId = pathname.substring(pathname.lastIndexOf('/') + 1);

  useEffect(() => {
    getPhone(itemId).then(setProduct);
    getSuggestedProducts(state.data).then(setSuggestedProducts);
  }, [state.data, itemId]);

  return (
    <>
      {product && (
        <div className={styles.wrapper}>
          <ItemOptions product={product} />
          <div className={styles.container}>
            <ItemAbout />
            <ItemSpech />
          </div>
          <SliderCard
            title="You may also like"
            items={suggestedProducts}
            id={1}
          />
        </div>
      )}
    </>
  );
};
