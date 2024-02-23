import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cartSlice",
    initialState: {
        cartList: []
    },
    reducers: {
        ADD_TO_CART: (state, action) => {
            const newItemId = action.payload.id;
            const existingItemId = state.cartList.find(item => item.id === newItemId);

           existingItemId ? existingItemId.quantity++ : state.cartList.push(action.payload)
          
        },
        REMOVE_FROM_CART: (state, action) => {
            state.cartList = state.cartList.filter((check) => check.id !== action.payload.id)
        },
        INCREMENT: (state, action) => {
            state.cartList = state.cartList.map((item) =>
            item.id === action.payload ? item.quantity++ : item)
        },
        DECREMENT: (state, action) => {
            state.cartList = state.cartList
            .map((item) =>
              item.id === action.payload ? item.quantity-- : item
            )
            .filter((item) => item.quantity !== 0);
        }
    }
})

export const { ADD_TO_CART, REMOVE_FROM_CART } = cartSlice.actions
export default cartSlice.reducer;