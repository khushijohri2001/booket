import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./filterSlice";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";
import wishlistSlice from "./wishlistSlice";

export const store = configureStore({
    reducer: {
        filter: filterSlice,
        product: productSlice,
        cart: cartSlice,
        wishlist: wishlistSlice
    }
})