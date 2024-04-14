import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "user",
    initialState : {
        "islogin" : false,
        "phone" : null ,  
        "image" : null , 
        "username" : null ,
        "is_forget_password" : false ,
        "id" : null,
        "email" : null ,
    },
    reducers : {
        changeUser : (state,action) => {
            state.islogin = action.payload.islogin
            state.phone = action.payload.phone 
            state.image = action.payload.image 
            state.username = action.payload.username
            state.is_forget_password = action.payload.is_forget_password
            state.id = action.payload.id 
            state.email = action.payload.email
        },
    }
});export const {changeUser} = userSlice.actions ; export default userSlice.reducer ;