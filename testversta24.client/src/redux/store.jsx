import { configureStore } from '@reduxjs/toolkit'
import ordersReducer from './reducer';

const store = configureStore({
    reducer : ordersReducer
});

export default store;