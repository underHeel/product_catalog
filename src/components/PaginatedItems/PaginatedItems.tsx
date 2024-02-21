import { Product } from 'src/types/Product';
import { ProductCard } from '../ProductCard';
import styles from './PaginatedItems.module.scss';

interface Props {
  currentItems: Product[];
}

export const Items: React.FC<Props> = ({ currentItems }) => {
  return (
    <div className={styles.main}>
      {currentItems && currentItems.map((item) => <ProductCard phone={item} />)}
    </div>
  );
};
