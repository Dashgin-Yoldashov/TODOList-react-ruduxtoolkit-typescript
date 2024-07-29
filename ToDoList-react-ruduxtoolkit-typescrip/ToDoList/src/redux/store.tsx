import { configureStore } from '@reduxjs/toolkit'
import todocreateReducer from './todocreateSlice'
export const store = configureStore({
  reducer: {
    todo: todocreateReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch