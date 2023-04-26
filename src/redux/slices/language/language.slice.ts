import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { ILanguageState } from './types';

const initialState: ILanguageState = {
  languages: [],
};

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.languages = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;

const persistConfig = {
  key: 'language',
  version: 1,
  storage,
  whiteList: ['languages'],
};

export default persistReducer(persistConfig, languageSlice.reducer);
