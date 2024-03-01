import { createSlice } from "@reduxjs/toolkit";

const mediaMatchSlice = createSlice({
    name: "mediaMatchSlice",
    initialState: {
        isMobileView: false,
    },
    reducers: {
        MEDIA_MATCH_HANDLER: (state, action) => {
            state.isMobileView = action.payload
          }
    }
})

export const {MEDIA_MATCH_HANDLER} = mediaMatchSlice.actions;
export default mediaMatchSlice.reducer