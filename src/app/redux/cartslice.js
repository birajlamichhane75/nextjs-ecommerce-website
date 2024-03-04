"use client"
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    item:[]
}


export const cartslice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        additem:(state,action)=>{
            const items={
                name:action.payload.name,
                img:action.payload.img,
                price:action.payload.price,
                type:action.payload.type,
                slug:action.payload.slug
            }
            state.item.push(items)
        },
        removeItem:(state,action)=>{
            let remain = state.item.filter((e)=>{
                return e.slug !== action.payload
            })
            state.item = remain
        }
    }
})

export const {additem,removeItem} = cartslice.actions;
export default cartslice.reducer