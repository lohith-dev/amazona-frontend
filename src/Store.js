import { configureStore,middleware } from '@reduxjs/toolkit'
import ProductsSlice from './reducers/Product.js';
import {logger} from 'redux-logger';
import thunk from 'redux-thunk';

export const store = configureStore({
  reducer: {
    Products: ProductsSlice,
    middleware: [thunk, logger],
  },
})
