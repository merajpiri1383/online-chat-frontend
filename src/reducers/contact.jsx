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
    },
    reducers : {
        changeContact  : (state,action) => {
            state.username = action.payload.username 
            state.image = action.payload.image 
            state.id = action.payload.id 
            state.email = action.payload.email 
            state.phone = action.payload.phone
            state.chat_id = action.payload.chat_id
        }
    }
});export const {changeContact} = contactSlice.actions;export default contactSlice.reducer ;