import { createSlice } from "@reduxjs/toolkit";
const pannel = createSlice({
    name : "pannel",
    initialState : {
        component : "call",
        app : "none",
    },
    reducers : {
        changeComponent : (state,action) => {
            state.component = action.payload
        },
        changeApp : (state,action) => {
            state.app = action.payload
        }
    }
});export const {changeComponent , changeApp} = pannel.actions;export default pannel.reducer;