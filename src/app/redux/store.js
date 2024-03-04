"use client"
const { configureStore } = require("@reduxjs/toolkit");
import dataReducer from '../redux/slice'
import cartReducer from '../redux/cartslice'

export const store = configureStore({
    reducer:{
        productData:dataReducer,
        cartData:cartReducer
    }
})