/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Category } from '../../types/Category';
import { Product } from '../../types/Product';
import { getAllProductsByCategory } from '../../api/products';

interface PhonesState {
  phones: Product[];
  loading: boolean;
  error: string;
}

const initialState: PhonesState = {
  phones: [],
  loading: false,
  error: '',
};

export const fetchPhones = createAsyncThunk('phones/fetch', () =>
  getAllProductsByCategory(Category.phones),
);

const phonesSlice = createSlice({
  name: 'phones',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPhones.pending, (state) => {
      state.error = '';
      state.loading = true;
    });

    builder.addCase(fetchPhones.fulfilled, (state, action) => {
      state.loading = false;
      state.phones = action.payload;
    });

    builder.addCase(fetchPhones.rejected, (state) => {
      state.loading = false;
      state.error = 'Something went wrong';
    });
  },
});

export default phonesSlice.reducer;
