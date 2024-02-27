import { Category } from '../types/Category';
import { Product } from '../types/Product';
import { getAllProductsByCategory } from '../api/products';
import { getRandomProduct } from './getRandomProduct';

export const getSuggestedProducts = (
  category: Category,
): Promise<Product[]> => {
  return getAllProductsByCategory(category).then((products) => {
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
