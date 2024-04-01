import { createSlice } from "@reduxjs/toolkit";
const backgroundSlice = createSlice({
    name : "background",
    initialState : {
        mode : "light",
        link : "status"
    },
    reducers : {
        changeMode : (state)=>{
            if(state.mode==="light"){
                state.mode = "dark"
            }else{
                state.mode = "light"
            }
        },
        changeLink : (state,action) => {
            state.link = action.payload
        }
    }
});export const {changeMode} = backgroundSlice.actions;export default backgroundSlice.reducer;