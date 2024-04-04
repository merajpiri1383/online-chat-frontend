import { createSlice } from "@reduxjs/toolkit";
const contact = createSlice({
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
});export const {changeContact} = contact.actions;export default contact.reducer ;