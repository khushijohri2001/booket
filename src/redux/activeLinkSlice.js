import { createSlice } from "@reduxjs/toolkit";

const activeLinkSlice = createSlice({
    name: "activeLinkSlice",
    initialState: {
        active: "Home"
    },
    reducers: {
        ACTIVE_LINK_HANDLER: (state, action) => {
            state.active = action.payload
        }
    }
})

export const {ACTIVE_LINK_HANDLER} = activeLinkSlice.actions;
export default activeLinkSlice.reducer;