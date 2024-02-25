import { Category } from '../types/Category';
import { getRandomProduct } from '../services/getRandomProduct';
import { sortProducts } from '../services/sortProducts';
import { Phone } from '../types/Phone';
import { Product } from '../types/Product';

const API_URL_PRODUCTS = `https://underheel.github.io/product_catalog/products.json`;
const API_URL_PHONES = `https://underheel.github.io/product_catalog/phones.json`;

export const getAllProducts = (category: string): Promise<Product[]> => {
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

  return getAllProducts(category).then((products) => {
    return sortProducts(sortBy, products).slice(start, end);
  });
};

export const getSuggestedProducts = (
  category: Category,
): Promise<Product[]> => {
  return getAllProducts(category).then((products) => {
    const suggestedProducts: Product[] = [];

    while (suggestedProducts.length < 10) {
      const randomProduct = getRandomProduct(products);

      if (!suggestedProducts.some(({ id }) => id === randomProduct.id)) {
        suggestedProducts.push(randomProduct);
      }

      if (suggestedProducts.length === 10) {
        break;
      }
    }

    return suggestedProducts;
  });
};

export const getPhone = (id: string): Promise<Phone> => {
  return fetch(API_URL_PHONES)
    .then((response) => response.json())
    .then((phones) => phones.find((phone: Phone) => phone.id === id));
};
