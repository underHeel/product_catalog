/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ErrorComponent } from '../../components/ErrorComponent';
import { Category } from '../../types/Category';
import { DetailedProduct } from '../../types/DetailedProduct';
import { getSuggestedProducts } from '../../services/getSuggestedProducts';
import { getAllProducts, getProduct } from '../../api/products';
import { Product } from '../../types/Product';
import { SliderCard } from '../../components/ui/slider/SliderCard';
import { ItemOptions } from '../../components/ItemOptions/ItemOptions';
import { ItemAbout } from '../../components/ItemAbout';
import { ItemSpech } from '../../components/ItemSpec';
import errorImg from '/img/errorImage.png';

import styles from './ProductPage.module.scss';

export const ProductPage: React.FC = () => {
  const [product, setProduct] = useState<DetailedProduct | null>(null);
  const [category, setCategory] = useState<Category | null>(null);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [suggestedProducts, setSuggestedProducts] = useState<Product[]>([]);
  const { state, pathname } = useLocation();

  const itemId = pathname.substring(pathname.lastIndexOf('/') + 1);

  useEffect(() => {
    getAllProducts().then(setAllProducts);
  }, []);

  useEffect(() => {
    if (state) {
      setCategory(state.data);
    } else {
      const foundCategory = allProducts.find(
        (item) => item.itemId === itemId,
      )?.category;

      setCategory(foundCategory as Category);
    }
  }, [allProducts, itemId, state]);

  useEffect(() => {
    if (category) {
      getSuggestedProducts(category).then(setSuggestedProducts);
      getProduct(category, itemId).then(setProduct);
    }
  }, [category, itemId]);

  return (
    <>
      {product ? (
        <>
          <div className={styles.wrapper}>
            <ItemOptions product={product} allProducts={allProducts} />
            <div className={styles.container}>
              <ItemAbout product={product} />
              <ItemSpech product={product} />
            </div>
          </div>
          <div className={styles.sliderWrapper}>
            <SliderCard
              title="You may also like"
              items={suggestedProducts}
              id={1}
            />
          </div>
        </>
      ) : (
        <ErrorComponent image={errorImg} errorMessage="Product was not found" />
      )}
    </>
  );
};
