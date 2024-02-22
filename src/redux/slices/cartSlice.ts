/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from 'src/types/Product';

interface Cart {
  productsList: Product[];
  quantity: 0;
}

const initialState: Cart = {
  productsList: [],
  quantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      state.productsList.push(action.payload);
      state.quantity += 1;
    },
    remove: (state, action: PayloadAction<number>) => {
      const indexToRemove = state.productsList.findIndex(
        (product) => product.id === action.payload,
      );

      if (indexToRemove !== -1) {
        state.productsList.splice(indexToRemove, 1);
        state.quantity -= 1;
      }
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      state.quantity += action.payload;
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      if (state.quantity > 0) {
        state.quantity -= action.payload;
      }
    },
  },
});

export default cartSlice.reducer;
export const { actions } = cartSlice;
