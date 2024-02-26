import { DetailedProduct } from 'src/types/DetailedProduct';
import { Category } from '../types/Category';
import { sortProducts } from '../services/sortProducts';
import { Product } from '../types/Product';

const API_URL_PRODUCTS = `https://underheel.github.io/product_catalog/products.json`;
const API_BASE_URL = `https://underheel.github.io/product_catalog`;

const API_URLS: Record<Category, string> = {
  [Category.phones]: `${API_BASE_URL}/phones.json`,
  [Category.tablets]: `${API_BASE_URL}/tablets.json`,
  [Category.accessories]: `${API_BASE_URL}/accessories.json`,
};

export const getAllProducts = (): Promise<Product[]> =>
  fetch(API_URL_PRODUCTS).then((response) => {
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }

    return response.json();
  });

export const getAllProductsByCategory = (
  category: string,
): Promise<Product[]> =>
  fetch(API_URL_PRODUCTS)
    .then((response) => response.json())
    .then((products) =>
      products.filter((product: Product) => product.category === category),
    );

export const getProducts = (
  category: Category,
  page = 1,
  perPage: number,
  sortBy: string,
): Promise<Product[]> => {
  const end = perPage * page;
  const start = end - perPage;

  return getAllProductsByCategory(category).then((products) =>
    sortProducts(sortBy, products).slice(start, end),
  );
};

export const getProduct = (
  category: Category,
  itemId: string,
): Promise<DetailedProduct> => {
  const apiUrl = API_URLS[category];

  if (!apiUrl) {
    throw new Error('Invalid category');
  }

  return fetch(apiUrl)
    .then((response) => response.json())
    .then((products) =>
      products.find((product: DetailedProduct) => product.id === itemId),
    );
};
