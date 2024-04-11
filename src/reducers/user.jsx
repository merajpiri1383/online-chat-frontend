import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "user",
    initialState : {
        "islogin" : false,
        "phone" : null , 
        "image" : null , 
        "username" : null ,
    },
    reducers : {
        changeUser : (state,action) => {
            console.log(action.payload)
            state.islogin = action.payload.islogin
            state.phone = action.payload.phone 
            state.image = action.payload.image 
            state.username = action.payload.username
        },
        changePhone : (state,action) => {
            state.phone = action.payload
        }
    }
});export const {changeUser,changePhone} = userSlice.actions ; export default userSlice.reducer ;