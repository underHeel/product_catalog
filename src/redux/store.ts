import { configureStore } from '@reduxjs/toolkit';
import phonesSlice from './slices/phonesSlice';
import cartSlice from './slices/cartSlice';
import themeSlice from './slices/themeSlice';

export const store = configureStore({
  reducer: {
    phones: phonesSlice,
    cart: cartSlice,
    theme: themeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
