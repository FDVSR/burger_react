import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import categoryReducer from './category/categorySlice.js';
import productSlice from './product/productSlice.js';
import orderReducer, {localStorageMiddleware} from './order/orderSlice.js';
import modalReducer from "./modalDevilery/modalDevilerySlice.js";
import formReducer from "./form/formSlice.js";


export const store=configureStore({
    reducer:{
        category: categoryReducer,
        product: productSlice,
        order: orderReducer,
        modal: modalReducer,
        form:formReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(localStorageMiddleware)
});