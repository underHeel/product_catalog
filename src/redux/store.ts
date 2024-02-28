import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slices/cartSlice';
import favoritesSlice from './slices/favoritesSlice';
import productsSlice from './slices/productsSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    favorites: favoritesSlice,
    products: productsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
