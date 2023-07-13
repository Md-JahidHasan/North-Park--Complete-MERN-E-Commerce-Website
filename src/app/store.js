import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import productsReducer from '../features/products/productsSlice';
import productReducer from '../features/product/productSlice';
import filterReducer from '../features/search/filterSlice';
import newProductsReducer from '../features/newProducts/newProductsSlice';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productsReducer,
    product: productReducer,
    filter: filterReducer,
    newProducts: newProductsReducer
  },
});
