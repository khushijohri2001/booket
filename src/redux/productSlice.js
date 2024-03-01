import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'productSlice',
    initialState: {
        allProductList: [],
        filteredProductList: [],
        activeProductId: ""
    },
    reducers: {
        ALL_PRODUCT_LIST_HANDLER: (state, action) => {
            state.allProductList = action.payload
        },
        FILTERED_PRODUCT_LIST_HANDLER: (state, action) => {
            state.filteredProductList = action.payload
        },
        ACTIVE_PRODUCT_HANDLER: (state, action) => {
            state.activeProductId = action.payload
        }
    }
})

export const {ALL_PRODUCT_LIST_HANDLER, ACTIVE_PRODUCT_HANDLER, FILTERED_PRODUCT_LIST_HANDLER} = productSlice.actions;
export default productSlice.reducer