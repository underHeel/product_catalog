import { DetailedProduct } from 'src/types/DetailedProduct';
import { Category } from '../types/Category';
import { sortProducts } from '../services/sortProducts';
import { Product } from '../types/Product';

const API_URL_PRODUCTS = `https://underheel.github.io/product_catalog/products.json`;
const API_URL_PHONES = `https://underheel.github.io/product_catalog/phones.json`;

export const getAllProducts = (): Promise<Product[]> =>
  fetch(API_URL_PRODUCTS).then((response) => {
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }

    return response.json();
  });

export const getAllProductsByCategory = (
  category: string,
): Promise<Product[]> => {
  return fetch(API_URL_PRODUCTS)
    .then((response) => response.json())
    .then((products) =>
      products.filter((product: Product) => product.category === category),
    );
};

export const getProducts = (
  category: Category,
  page = 1,
  perPage: number,
  sortBy: string,
): Promise<Product[]> => {
  const end = perPage * page;
  const start = end - perPage;

  return getAllProductsByCategory(category).then((products) => {
    return sortProducts(sortBy, products).slice(start, end);
  });
};

export const getPhone = (itemId: string): Promise<DetailedProduct> => {
  return fetch(API_URL_PHONES)
    .then((response) => response.json())
    .then((products) =>
      products.find((phone: DetailedProduct) => phone.id === itemId),
    );
};
