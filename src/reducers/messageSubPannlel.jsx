import { createSlice } from "@reduxjs/toolkit";
const messageSubPannle = createSlice({
    name : "message_sub_pannel",
    initialState : {
        mode : "personal",
        user : "none",
    },
    reducers : {
        changeMode : (state,action) => {
            state.mode = action.payload
        },
        changeUser : (state,action) => {
            state.user = action.payload
        }
    }
});export const {changeMode,changeUser} = messageSubPannle.actions;export default messageSubPannle.reducer;