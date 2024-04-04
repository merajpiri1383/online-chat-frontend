import { createSlice } from "@reduxjs/toolkit";
const page = createSlice({
    name : "page",
    initialState : {
        current : "chat"
    },
    reducers : {
        changePage : (state,action) => {
            state.current = action.payload 
        }
    }
});export const {changePage} = page.actions ; export default page.reducer;