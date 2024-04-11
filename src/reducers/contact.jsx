import { createSlice } from "@reduxjs/toolkit";
const contactSlice = createSlice({
    name : "contact",
    initialState : {
        name : null,
        online : false
    },
    reducers : {
        changeContact  : (state,action) => {
            state.name = action.payload.name
            state.online = action.payload.online
        }
    }
});export const {changeContact} = contactSlice.actions;export default contactSlice.reducer ;