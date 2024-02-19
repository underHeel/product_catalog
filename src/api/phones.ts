import { Phone } from 'src/types/Phone';

const API_URL = `https://underheel.github.io/product_catalog/phones.json`;

export const getPhones = (): Promise<Phone[]> => {
  return fetch(API_URL).then((response) => {
    if (!response.ok) {
      throw new Error();
    }

    return response.json();
  });
};
