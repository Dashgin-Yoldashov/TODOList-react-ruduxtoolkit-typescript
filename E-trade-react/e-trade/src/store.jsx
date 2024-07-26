import { configureStore } from '@reduxjs/toolkit'
import productReducer from './slices/productSlice'
import counterReducer from './slices/counterSlice'
import basketReducer from './slices/basketSlice'
export const store = configureStore({
  reducer: {
    product: productReducer,
    counter: counterReducer,
    basket: basketReducer,
  },
})