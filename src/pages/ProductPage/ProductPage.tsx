/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { useLocation } from 'react-router-dom';
import { ItemSpecSkeleton } from '../../components/Skeletons/ItemSpecSkeleton/ItemSpecSkeleton';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { ErrorComponent } from '../../components/ErrorComponent';
import { Category } from '../../types/Category';
import { DetailedProduct } from '../../types/DetailedProduct';
import { getSuggestedProducts } from '../../services/getSuggestedProducts';
import { getAllProducts, getProduct } from '../../api/products';
import { Product } from '../../types/Product';
import { SliderCard } from '../../components/ui/slider';
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
  const [loading, setLoading] = useState(true);
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
      setLoading(true);

      setTimeout(() => {
        getProduct(category, itemId)
          .then(setProduct)
          .finally(() => setLoading(false));
      }, 1000);
    }
  }, [category, itemId]);

  if (loading) {
    return (
      <BallTriangle
        height={150}
        width={150}
        radius={5}
        color="var(--accent-color)"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass={styles.loaderWrapper}
        visible
      />
    );
  }

  return (
    <>
      <ItemSpecSkeleton />
      {product ? (
        <>
          <div className={styles.breadCrumbsWrapper}>
            <Breadcrumbs category={category} />
          </div>
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
