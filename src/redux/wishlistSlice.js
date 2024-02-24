import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlistSlice",
  initialState: {
    wishList: [],
  },
  reducers: {
    ADD_TO_WISHLIST: (state, action) => {
      const newItemId = action.payload.id;
      const existingItemId = state.wishList.find(
        (item) => item.id === newItemId
      );

      existingItemId
        ? existingItemId.quantity++
        : state.wishList.push(action.payload);
    },
    REMOVE_FROM_WISHLIST: (state, action) => {
      state.wishList = state.wishList.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } = wishlistSlice.actions;
export default wishlistSlice.reducer;
