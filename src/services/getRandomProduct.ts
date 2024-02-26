import { Product } from '../types/Product';

export const getRandomProduct = (products: Product[]) => {
  const randomIndex = Math.floor(Math.random() * products.length);

  return products[randomIndex];
};
