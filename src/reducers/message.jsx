import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name : "message",
    initialState : {
        "messagetoggle" : false,
    },
    reducers : {
        changeMessageToggle :  (state) => {
            state.messagetoggle = !state.messagetoggle 
        }
    }
});export const {changeMessageToggle } = messageSlice.actions;export default messageSlice.reducer ;