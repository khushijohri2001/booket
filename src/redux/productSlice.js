import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'productSlice',
    initialState: {
        filteredProductList: undefined
    },
    reducers: {
        FILTERED_PRODUCT_LIST_HANDLER: (state, action) => {
            state.filteredProductList = action.payload
        },
    }
})

export const {PRODUCT_LIST_HANDLER, FILTERED_PRODUCT_LIST_HANDLER} = productSlice.actions;
export default productSlice.reducer