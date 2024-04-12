import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "user",
    initialState : {
        "islogin" : false,
        "phone" : null , 
        "image" : null , 
        "username" : null ,
        "is_forget_password" : false ,
    },
    reducers : {
        changeUser : (state,action) => {
            console.log(action.payload)
            state.islogin = action.payload.islogin
            state.phone = action.payload.phone 
            state.image = action.payload.image 
            state.username = action.payload.username
            state.is_forget_password = action.payload.is_forget_password
        },
    }
});export const {changeUser} = userSlice.actions ; export default userSlice.reducer ;