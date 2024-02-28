import { createSlice } from "@reduxjs/toolkit";

const mediaMatchSlice = createSlice({
    name: "mediaMatchSlice",
    initialState: {
        matches: window.matchMedia("(min-width: 480px)").matches
    },
    reducers: {
        MEDIA_MATCH_HANDLER: (state) => {
            window
            .matchMedia("(min-width: 480px)")
            .addEventListener('change', e => state.matches =  e.state.matches);
          }
    }
})

export const {MEDIA_MATCH_HANDLER} = mediaMatchSlice.actions;
export default mediaMatchSlice.reducer