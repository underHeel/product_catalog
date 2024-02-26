import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Category } from '../../types/Category';
import { DetailedProduct } from '../../types/DetailedProduct';
import { getSuggestedProducts } from '../../services/getSuggestedProducts';
import { getAllProducts, getPhone } from '../../api/products';
import { Product } from '../../types/Product';
import { SliderCard } from '../../components/ui/slider/SliderCard';
import { ItemOptions } from '../../components/ItemOptions/ItemOptions';
import { ItemAbout } from '../../components/ItemAbout';
import { ItemSpech } from '../../components/ItemSpec';

import styles from './ProductPage.module.scss';

export const ProductPage: React.FC = () => {
  const [product, setProduct] = useState<DetailedProduct | null>(null);
  const [category, setCategory] = useState<Category | null>(null);
  const [suggestedProducts, setSuggestedProducts] = useState<Product[]>([]);
  const { state, pathname } = useLocation();

  const itemId = pathname.substring(pathname.lastIndexOf('/') + 1);

  useEffect(() => {
    if (state) {
      setCategory(state.data);
    } else {
      getAllProducts().then((products) => {
        const foundCategory = products.find(
          (item) => item.itemId === itemId,
        )?.category;

        setCategory(foundCategory as Category);
      });
    }

    if (category) {
      getSuggestedProducts(category).then(setSuggestedProducts);
    }

    getPhone(itemId).then(setProduct);
  }, [category, itemId, state]);

  return (
    <>
      {product && (
        <div className={styles.wrapper}>
          <ItemOptions product={product} />
          <div className={styles.container}>
            <ItemAbout product={product} />
            <ItemSpech product={product} />
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
