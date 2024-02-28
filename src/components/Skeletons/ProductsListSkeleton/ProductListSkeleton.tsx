import styles from './ProductListSkeleton.module.scss';
import { PaginatedStoreSkeleton } from '../PaginatedStoreSkeleton/PaginatedStoreSkeleton';

export function ProductListSkeleton() {
  return (
    <div className={styles.container}>
      <div className={styles.catalogWrapper}>
        <div className={styles.title} />
        <div className={styles.subTitle} />
        <div className={styles.dropdownsWrapper}>
          <div className={styles.block}>
            <p className={styles.parameter}>Sort by</p>
            <div className={styles.sortBy} />
          </div>
          <div className={styles.block}>
            <p className={styles.parameter}>Items on page</p>
            <div className={styles.itemsPerPage} />
          </div>
        </div>
        <PaginatedStoreSkeleton />
      </div>
    </div>
  );
}
