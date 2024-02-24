import { sortProducts } from '../services/sortProducts';
import { Phone } from '../types/Phone';
import { Product } from '../types/Product';

const API_URL_PRODUCTS = `https://underheel.github.io/product_catalog/products.json`;
const API_URL_PHONES = `https://underheel.github.io/product_catalog/phones.json`;

export const getAllPhones = (): Promise<Product[]> => {
  return fetch(API_URL_PRODUCTS)
    .then((response) => response.json())
    .then((products) =>
      products.filter((product: Product) => product.category === 'phones'),
    );
};

export const getPhones = (
  page = 1,
  perPage: number,
  sortBy: string,
): Promise<Product[]> => {
  const end = perPage * page;
  const start = end - perPage;

  return getAllPhones().then((phones) => {
    return sortProducts(sortBy, phones).slice(start, end);
  });
};

export const getPhone = (id: string): Promise<Phone> => {
  return fetch(API_URL_PHONES)
    .then((response) => response.json())
    .then((phones) => phones.find((phone: Phone) => phone.id === id));
};
