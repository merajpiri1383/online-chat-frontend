import { createSlice } from "@reduxjs/toolkit";
const messageSubPannleSlice = createSlice({
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
});export const {changeMode,changeUser} = messageSubPannleSlice.actions;export default messageSubPannleSlice.reducer;