import { configureStore } from '@reduxjs/toolkit';
import phonesSlice from './slices/phonesSlice';
import cartSlice from './slices/cartSlice';
import favoritesSlice from './slices/favoritesSlice';
import tabletsSlice from './slices/tabletsSlice';
import accessoriesSlice from './slices/accessoriesSlice';

export const store = configureStore({
  reducer: {
    phones: phonesSlice,
    tablets: tabletsSlice,
    accessories: accessoriesSlice,
    cart: cartSlice,
    favorites: favoritesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
