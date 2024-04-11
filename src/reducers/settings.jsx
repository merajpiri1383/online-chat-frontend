import {createSlice} from "@reduxjs/toolkit";
const settingSlice = createSlice({
    name : "settings",
    initialState : {
        current : "none",
    },
    reducers : {
        changeCurrent : (state,action) => {
            state.current = action.payload
        }
    }
});export const {changeCurrent} = settingSlice.actions;export default settingSlice.reducer;