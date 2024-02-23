/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from 'src/types/CartItem';
import { Product } from 'src/types/Product';
import { getCartFromStorage, setProductToStorage } from '../storage';

interface Cart {
  productsList: CartItem[];
}

const initialState: Cart = {
  productsList: getCartFromStorage(),
};

const findProductIndexById = (productsList: CartItem[], id: number) => {
  return productsList.findIndex((product) => product.id === id);
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      const { payload } = action;
      const existingProductIndex = findProductIndexById(
        state.productsList,
        payload.id,
      );

      if (existingProductIndex !== -1) {
        state.productsList[existingProductIndex].count += 1;
      } else {
        state.productsList.push({ ...payload, count: 1 });
      }

      setProductToStorage(state.productsList);
    },
    remove: (state, action: PayloadAction<number>) => {
      const indexToRemove = findProductIndexById(
        state.productsList,
        action.payload,
      );

      if (indexToRemove !== -1) {
        state.productsList.splice(indexToRemove, 1);
      }

      setProductToStorage(state.productsList);
    },
    increaseCount: (state, action: PayloadAction<number>) => {
      const indexToIncrease = findProductIndexById(
        state.productsList,
        action.payload,
      );

      if (indexToIncrease !== -1) {
        state.productsList[indexToIncrease].count += 1;
      }

      setProductToStorage(state.productsList);
    },
    decreaseCount: (state, action: PayloadAction<number>) => {
      const indexToDecrease = findProductIndexById(
        state.productsList,
        action.payload,
      );

      if (
        indexToDecrease !== -1 &&
        state.productsList[indexToDecrease].count > 0
      ) {
        state.productsList[indexToDecrease].count -= 1;
      }

      setProductToStorage(state.productsList);
    },
  },
});

export default cartSlice.reducer;
export const { actions } = cartSlice;
