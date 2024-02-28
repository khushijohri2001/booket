import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name: "menuSlice",
    initialState: {
        isMenuOpen: false
    },
    reducers: {
        MENU_HANDLER: (state, action) => {
            state.isMenuOpen = !state.isMenuOpen
        }
    }

})

export const {MENU_HANDLER} = menuSlice.actions;
export default menuSlice.reducer;