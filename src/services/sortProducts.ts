/* eslint-disable prettier/prettier */
import { Product } from 'src/types/Product';

export const sortProducts = (
  sortBy: string,
  products: Product[],
): Product[] => {
  return [...products].sort((a, b) => {
    switch (sortBy) {
    case 'Alphabetically':
      return a.name.localeCompare(b.name);
    case 'Cheapest':
      return a.price - b.price;
    default:
      return b.year - a.year;
    }
  });
};
