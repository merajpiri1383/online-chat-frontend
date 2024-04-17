import { createSlice } from "@reduxjs/toolkit";
const contactSlice = createSlice({
    name : "contact",
    initialState : {
        username : null,
        image : null ,
        id : null ,
        email : null , 
        phone : null ,
        chat_id : null ,
        toggle : true ,
        blocked : null ,
    },
    reducers : {
        changeContact  : (state,action) => {
            state.username = action.payload.username 
            state.image = action.payload.image 
            state.id = action.payload.id 
            state.email = action.payload.email 
            state.phone = action.payload.phone 
            state.chat_id = action.payload.chat_id 
            state.blocked = action.payload.blocked
        },
        contactToggle : (state) => {
            state.toggle = !state.toggle
        },
        changeBlock : (state,action) => {
            state.blocked = action.payload
        }
    }
});export const {changeContact,contactToggle,changeBlock} = contactSlice.actions;export default contactSlice.reducer ;