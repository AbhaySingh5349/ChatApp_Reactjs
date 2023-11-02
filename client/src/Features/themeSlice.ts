import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'themeSlice',
  initialState: true,
  reducers: {
    // functions which can change state globally
    toggleTheme: (state: boolean) => {
      return !state;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
