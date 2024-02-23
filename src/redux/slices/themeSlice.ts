/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { Theme } from 'src/types/Theme';
import { getItemFromStorage, setItemToStorage } from '../storage';

const initialState: { theme: Theme } = {
  theme: getItemFromStorage('theme', 'light'),
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state) => {
      if (state.theme === 'light') {
        state.theme = 'dark';
      } else {
        state.theme = 'light';
      }

      setItemToStorage('theme', state.theme);
    },
  },
});

export default themeSlice.reducer;
export const { actions } = themeSlice;
