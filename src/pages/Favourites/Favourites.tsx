import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import { ProductCard } from '../../components/ProductCard';
import styles from './Favourites.module.scss';

export const Favourites: React.FC = () => {
  const { favoritesList } = useAppSelector((state) => state.favorites);

  return (
    <div className={styles.container}>
      <div className={styles.favoritesWrapper}>
        <h1 className={styles.title}>Favourites</h1>
        <p className={styles.subTitle}>{`${favoritesList.length} items`}</p>
        <div className={styles.list}>
          {favoritesList.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
