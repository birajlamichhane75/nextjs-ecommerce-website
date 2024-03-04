"use client"
import { allProduct } from "../../../lib/items";

const { createSlice } = require("@reduxjs/toolkit");

let initialState = {
    data:[allProduct]
}

export const dataSlice = createSlice({
    name:"data",
    initialState,
    
    
})
export const {product} = dataSlice.actions
export default dataSlice.reducer