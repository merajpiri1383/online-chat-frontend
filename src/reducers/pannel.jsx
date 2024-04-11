import { createSlice } from "@reduxjs/toolkit";
const pannelSlice = createSlice({
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
});export const {changeComponent , changeApp} = pannelSlice.actions;export default pannelSlice.reducer;