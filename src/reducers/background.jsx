import { createSlice } from "@reduxjs/toolkit";
const backgroundSlice = createSlice({
    name : "background",
    initialState : {
        mode : "light",
        link : "status",
        showPannel : false,
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
        },
        changeShowPannel : (state) => {
            state.showPannel = !state.showPannel
        }
    }
});export const {changeMode,changeShowPannel} = backgroundSlice.actions;export default backgroundSlice.reducer;