import { Phone } from 'src/types/Phone';

const API_URL = `https://underheel.github.io/product_catalog/phones.json`;

export const getPhones = (
  page: number,
  itemsPerPage: number,
): Promise<Phone[]> => {
  const end = page * itemsPerPage;
  const start = end - itemsPerPage;

  return fetch(API_URL)
    .then((response) => response.json())
    .then((phones) => phones.slice(start, end));
};
