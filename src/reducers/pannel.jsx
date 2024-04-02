import { createSlice } from "@reduxjs/toolkit";
const pannel = createSlice({
    name : "pannel",
    initialState : {
        component : "call",
    },
    reducers : {
        changeComponent : (state,action) => {
            state.component = action.payload
        }
    }
});export const {changeComponent} = pannel.actions;export default pannel.reducer;