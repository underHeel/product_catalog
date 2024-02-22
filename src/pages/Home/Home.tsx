import React, { useEffect, useState } from 'react';
import { Product } from 'src/types/Product';
import { Category } from '../../components/Category/Category';
import { SliderCard } from '../../components/ui/slider/SliderCard';
import { TopSlider } from '../../components/TopSlider/TopSlider';
import styles from './Home.module.scss';
import * as api from '../../api/phones';

export const Home: React.FC = () => {
  const [phones, setPhones] = useState<Product[]>([]);

  const testPhone = phones.slice(0, 10);

  useEffect(() => {
    api.getAllPhones().then((res) => setPhones(res));
  }, [phones]);

  return (
    <>
      <h2 className={styles.title}>
        Welcome to Nice <br />
        Gadgets store!
      </h2>
      <TopSlider />
      <div className={styles.wrapper}>
        <SliderCard title="Brand new models" items={testPhone} id={1} />
        <Category />
        <SliderCard title="Hot Prices" items={testPhone} id={2} />
      </div>
    </>
  );
};
