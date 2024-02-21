import { Product } from 'src/types/Product';

const API_URL = `https://underheel.github.io/product_catalog/products.json`;

export const getPhones = (): Promise<Product[]> => {
  return fetch(API_URL).then((response) => response.json());
};
