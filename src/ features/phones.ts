import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Phone } from 'src/types/Phone';

const initialState: Phone[] = [];

const phonesSlice = createSlice({
  name: 'phones',
  initialState,
  reducers: {
    loadPhones: (_state, action: PayloadAction<Phone[]>) => action.payload,
  },
});

export default phonesSlice.reducer;
export const { actions } = phonesSlice;
