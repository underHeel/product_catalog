import { Phone } from 'src/types/Phone';
import { Product } from 'src/types/Product';

const API_URL_PRODUCTS = `https://underheel.github.io/product_catalog/products.json`;
const API_URL_PHONES = `https://underheel.github.io/product_catalog/phones.json`;

export const getAllPhones = (): Promise<Product[]> => {
  return fetch(API_URL_PRODUCTS)
    .then((response) => response.json())
    .then((products) =>
      products.filter((product: Product) => product.category === 'phones'),
    );
};

export const getPhones = (page = 1, perPage = 12): Promise<Product[]> => {
  const end = perPage * page;
  const start = end - perPage;

  return getAllPhones().then((phones) => {
    return phones
      .sort((a: Product, b: Product) => b.year - a.year)
      .slice(start, end);
  });
};

export const getPhone = (id: string): Promise<Phone> => {
  return fetch(API_URL_PHONES)
    .then((response) => response.json())
    .then((phones) => phones.find((phone: Phone) => phone.id === id));
};
