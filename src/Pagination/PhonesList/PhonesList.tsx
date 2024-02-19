import { Phone } from 'src/types/Phone';
import { ProductCard } from '../../components/ProductCard';
import styles from './PhonesList.module.scss';

interface Props {
  phones: Phone[];
  loading: boolean;
}

export const PhonePage: React.FC<Props> = ({ phones, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className={styles.store}>
      {phones.map((phone: Phone) => (
        <ProductCard phone={phone} key={phone.id} />
      ))}
    </div>
  );
};
