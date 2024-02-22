import { CartItem } from 'src/types/CartItem';

export function getCartFromStorage() {
  const cartFromStorage = localStorage.getItem('cart');
  const cart = cartFromStorage ? JSON.parse(cartFromStorage) : [];

  return cart;
}

export function setProductToStorage(cart: CartItem[]) {
  localStorage.setItem('cart', JSON.stringify(cart));
}
