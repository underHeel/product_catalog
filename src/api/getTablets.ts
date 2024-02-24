import { Product } from 'src/types/Product';

const API_URL_PRODUCTS = `https://underheel.github.io/product_catalog/products.json`;

export const getTablets = (): Promise<Product[]> => {
  return fetch(API_URL_PRODUCTS)
    .then((response) => response.json())
    .then((products) =>
      products.filter((product: Product) => product.category === 'tablets'),
    );
};
