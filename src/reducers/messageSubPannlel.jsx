import { createSlice } from "@reduxjs/toolkit";
const messageSubPannleSlice = createSlice({
    name : "message_sub_pannel",
    initialState : {
        mode : "personal",
        user : "none",
        delete_toggle : false,
    },
    reducers : {
        changeMode : (state,action) => {
            state.mode = action.payload
        },
        changeUser : (state,action) => {
            state.user = action.payload
        },
        deleteUserToggle : (state) => {
            state.delete_toggle = !state.delete_toggle
        }
    }
});export const {changeMode,changeUser,deleteUserToggle} = messageSubPannleSlice.actions;export default messageSubPannleSlice.reducer;