import { ProductCardSkeleton } from '../ProductCardSkeleton/ProductCardSkeleton';
import styles from './PaginatedStoreSkeleton.module.scss';

export function PaginatedStoreSkeleton() {
  return (
    <div className={styles.cardsList}>
      {[...Array(4)].map(() => (
        <div className={styles.cardWrapper}>
          <ProductCardSkeleton />
        </div>
      ))}
    </div>
  );
}
