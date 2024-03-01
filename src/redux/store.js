import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./filterSlice";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";
import wishlistSlice from "./wishlistSlice";
import menuSlice from "./menuSlice";
import mediaMatchSlice from "./mediaMatchSlice";
import activeLinkSlice from "./activeLinkSlice";

export const store = configureStore({
    reducer: {
        filter: filterSlice,
        product: productSlice,
        cart: cartSlice,
        wishlist: wishlistSlice,
        menu: menuSlice,
        mediaMatch: mediaMatchSlice,
        activeLink: activeLinkSlice
    }
})