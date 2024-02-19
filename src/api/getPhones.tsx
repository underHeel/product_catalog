import { useState, useEffect } from 'react';
import { Phone } from 'src/types/Phone';
import { ProductCard } from '../components/ProductCard';
import { getPhones } from './phones';

export const GetPagination = () => {
  const [products, setProducts] = useState<Phone[]>([]);

  useEffect(() => {
    getPhones().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div>
      {products.map((product) => (
        <ProductCard phone={product} />
      ))}
    </div>
  );
};
