import { configureStore } from '@reduxjs/toolkit';
import { employeeReducer } from './employeeReducer';

export const store = configureStore({
  reducer: employeeReducer
});
