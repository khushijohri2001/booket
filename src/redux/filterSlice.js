import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filterSlice",
  initialState: {
    byStock: false,
    priceRange: 2000,
    byRating: 5,
    byNotebook: false,
    byBookmark: false,
    searchQuery: "",
    byPrice: 0,
    sort: undefined,
  },
  reducers: {
    SORT_BY_PRICE: (state, action) => {
        state.sort = action.payload
    },
    FILTER_BY_PRICE_RANGE: (state, action) => {
        state.priceRange = action.payload
    },
    FILTER_BY_STOCK: (state) => {
        state.byStock = !state.byStock
    },
    FILTER_BY_NOTEBOOK: (state) => {
        state.byNotebook = !state.byNotebook
    },
    FILTER_BY_BOOKMARK: (state) => {
        state.byBookmark = !state.byBookmark
    },
    FILTER_BY_RATING: (state, action) => {
        state.byRating = action.payload
    },
    FILTER_BY_SEARCH: (state, action) => {
        state.searchQuery = action.payload
    },
    CLEAR_FILTER: (state) => {
        state.byStock = false
        state.priceRange = 2000
        state.byRating = 5
        state.byNotebook = false
        state.byBookmark = false
        state.searchQuery = ""
        state.byPrice = 0
        state.sort = undefined
    }
  }
});

export const {SORT_BY_PRICE, FILTER_BY_PRICE_RANGE, FILTER_BY_STOCK, FILTER_BY_NOTEBOOK, FILTER_BY_BOOKMARK, FILTER_BY_RATING, FILTER_BY_SEARCH, CLEAR_FILTER} = filterSlice.actions;
export default filterSlice.reducer;