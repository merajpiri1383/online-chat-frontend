import { createSlice } from "@reduxjs/toolkit";
const pageSlice = createSlice({
    name : "page",
    initialState : {
        current : window.screen.width > 992 ? "auth" : "none"
    },
    reducers : {
        changePage : (state,action) => {
            state.current = action.payload 
        }
    }
});export const {changePage} = pageSlice.actions ; export default pageSlice.reducer;