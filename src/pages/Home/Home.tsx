import React from 'react';
// import { SliderCard } from '../../components/SliderCarts/SliderCard';
import { Category } from '../../components/Category/Category';
import styles from './Home.module.scss';

export const Home: React.FC = () => {
  return (
    <>
      <h1 className={styles.title}>
        Welcome to Nice
        <br />
        Gadgets store!
      </h1>
      <div className={styles.wrapper}>
        <section className={styles.slider}>TOP SLIDER</section>

        <div>SLIDER</div>

        <Category />
      </div>
    </>
  );
};
