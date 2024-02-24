import { createSlice } from "@reduxjs/toolkit";
import { savedPrice } from "../utils/functions";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cartList: [],
    totalItemQuantity: undefined,
    totalOriginalPrice: undefined,
    totalPrice: undefined,
    totalDiscountPrice: undefined
  },
  reducers: {
    ADD_TO_CART: (state, action) => {
      const newItemId = action.payload.id;
      const existingItemId = state.cartList.find(
        (item) => item.id === newItemId
      );

      existingItemId
        ? existingItemId.quantity++
        : state.cartList.push(action.payload);
    },
    REMOVE_FROM_CART: (state, action) => {
      state.cartList = state.cartList.filter(
        (item) => item.id !== action.payload.id
      );
    },
    INCREMENT: (state, action) => {
      state.cartList = state.cartList.map((item) => {
        item.id === action.payload && item.quantity++;
        return item;
      });
    },
    DECREMENT: (state, action) => {
      state.cartList = state.cartList
        .map((item) => {
          item.id === action.payload && item.quantity--;
          return item;
        })
        .filter((item) => item.quantity !== 0);
    },
    TOTAL_ITEMS_QUANTITY_HANDLER: (state) => {
        state.totalItemQuantity = state.cartList.reduce((acc, cur) => acc += cur.quantity, 0)
    },
    TOTAL_ORIGINAL_PRICE_HANDLER: (state) => {
        state.totalOriginalPrice = state.cartList.reduce((acc, cur) => acc + (Number(cur.originalPrice) * cur.quantity), 0)
    },
    TOTAL_PRICE_HANDLER: (state) => {
       state.totalPrice = state.cartList.reduce((acc, cur) => acc + (Number(cur.price) * cur.quantity), 0)
    },
    TOTAL_DISCOUNT_PRICE_HANDLER: (state) => {
        state.totalDiscountPrice = state.cartList.reduce((acc, cur) => acc + Number(savedPrice(cur.originalPrice, cur.price)) * cur.quantity, 0)
    }
  },
});

export const { ADD_TO_CART, REMOVE_FROM_CART, INCREMENT, DECREMENT, TOTAL_ITEMS_QUANTITY_HANDLER, TOTAL_ORIGINAL_PRICE_HANDLER
, TOTAL_PRICE_HANDLER, TOTAL_DISCOUNT_PRICE_HANDLER } =
  cartSlice.actions;
export default cartSlice.reducer;
