"use client"; 
import { configureStore } from '@reduxjs/toolkit';
import myDataReducer from './slices/myDataSlice';
import filterReducer from './slices/Filter';

export const store = configureStore({
reducer: {
    myData: myDataReducer,
    filter: filterReducer,
},
devTools: process.env.NODE_ENV !== 'production',
});

// Infer the `RootState` and `AppDispatch` types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
