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
  category: Category,
): Promise<Product[]> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(API_URL_PRODUCTS)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch products by category');
          }

          return response.json();
        })
        .then((products) => {
          const filteredProducts = products.filter(
            (product: Product) => product.category === category,
          );

          resolve(filteredProducts);
        })
        .catch((error) => reject(error));
    }, 1000);
  });

export const getProducts = (
  category: Category,
  page?: number,
  perPage?: number,
  sortBy?: string,
): Promise<{ productsList: Product[]; totalCount: number }> => {
  if (sortBy && page && perPage) {
    const end = perPage * page;
    const start = end - perPage;

    return getAllProductsByCategory(category).then((products) => ({
      productsList: sortProducts(sortBy, products).slice(start, end),
      totalCount: products.length,
    }));
  }

  return getAllProductsByCategory(category).then((products) => ({
    productsList: products,
    totalCount: products.length,
  }));
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
